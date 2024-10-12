import { NavigateFunction } from 'react-router-dom'
import CanvasController from '../../../components/Canvas/controller'
import { IGame } from '../../../components/Canvas/interfaces'
import convertSeconds from '../../../helpers/convertSeconds'
import Camera from './Camera'
import TextParticles from './TextParticles'
import Player from './Player'
import Enemies from './Enemies'
import Exps from './Exp'
import Bullets from './Bullets'
import Background from './Background'
import { IJoystickUpdateEvent } from '../../../components/JoystickComponent/interfaces'

class Game implements IGame {
  Camera: Camera
  TextParticles: TextParticles
  Player: Player
  Enemies: Enemies
  Exp: Exps
  Bullets: Bullets
  audioContext: AudioContext
  canvas?: CanvasController
  CanvasWidth = window.innerWidth
  CanvasHeight = window.innerHeight
  GameTick = 0
  timer = 0
  lastTimerUpdate?: number
  backgroundSpeed = 2
  background: Background

  pause = false
  spawnRate = 100
  minEnemyLevel = 1
  maxEnemyLevel = 1
  bossChance = 1000

  destroyers: Array<() => void> = []

  constructor(
    public setShowCards: React.Dispatch<React.SetStateAction<boolean>>,
    public navigate: NavigateFunction
  ) {
    this.audioContext = new AudioContext()
    this.background = new Background('/images/game-background.png')
    this.Camera = new Camera(this)
    this.TextParticles = new TextParticles(this)
    this.Player = new Player(this)
    this.Enemies = new Enemies(this)
    this.Exp = new Exps(this)
    this.Bullets = new Bullets(this)
  }

  init() {
    Promise.all(
      [this.Player, this.Enemies, this.Bullets, this.Exp].map(
        component =>
          new Promise(resolve => {
            component.spriteIsLoaded = true
            component.sprite.onload = resolve
          })
      )
    ).then(() => {
      this.initAnimate()

      this.destroyers.push(this.initListeners())

      this.lastTimerUpdate = performance.now()
      this.updateTimer()
    })
  }

  private initAnimate() {
    if (this.canvas) {
      this.canvas.canvas.width = this.CanvasWidth
      this.canvas.canvas.height = this.CanvasHeight
      this.canvas.initAnimate()
    }
  }

  private initListeners() {
    const pressedKeys: Record<string, boolean> = {}

    const handleKeyDown = (event: KeyboardEvent) => {
      pressedKeys[event.code] = true
      updatePlayerVelocity()
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      pressedKeys[event.code] = false
      updatePlayerVelocity()
    }

    const updatePlayerVelocity = () => {
      this.Player.vx =
        (pressedKeys['KeyD'] || pressedKeys['ArrowRight']
          ? this.Player.speed
          : 0) -
        (pressedKeys['KeyA'] || pressedKeys['ArrowLeft']
          ? this.Player.speed
          : 0)
      this.Player.vy =
        (pressedKeys['KeyS'] || pressedKeys['ArrowDown']
          ? this.Player.speed
          : 0) -
        (pressedKeys['KeyW'] || pressedKeys['ArrowUp'] ? this.Player.speed : 0)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }

  handleJoystickMove = (event: IJoystickUpdateEvent) => {
    const { x, y } = event

    const magnitude = Math.sqrt(x! * x! + y! * y!)
    const normalizedX = x! / magnitude
    const normalizedY = y! / magnitude

    this.Player.vx = normalizedX * this.Player.speed
    this.Player.vy = -normalizedY * this.Player.speed
  }

  handleJoystickStop = () => {
    this.Player.vx = 0
    this.Player.vy = 0
  }

  private updateTimer() {
    if (!this.pause && this.lastTimerUpdate) {
      const now = performance.now()
      if (now - this.lastTimerUpdate >= 1000) {
        this.lastTimerUpdate = now
        this.timer++

        if (this.bossChance > 10) {
          this.bossChance -= 2
        }
        if (this.timer % 60 === 0) {
          if (this.timer % 120 === 0 && this.maxEnemyLevel < 4) {
            this.maxEnemyLevel += 1
          }
          this.spawnRate = Math.floor(this.spawnRate / 1.2) + 1
        }
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    this.Camera.cameraMovement()
    this.background.draw(
      ctx,
      -this.Camera.x,
      -this.Camera.y,
      this.CanvasWidth,
      this.CanvasHeight
    )
    this.Bullets.renderBullet(ctx)
    this.Bullets.createBullet()
    this.Enemies.renderEnemies(ctx)
    this.Exp.renderExp(ctx)
    this.Camera.cameraMovement()
    this.Player.renderPlayer(ctx)
    this.TextParticles.renderTextParticles(ctx)
    this.Enemies.createEnemy()
    this.drawTimer(ctx)
    this.updateTimer()

    if (this.Player.hp === 0) {
      this.finishGame()
    }

    this.GameTick++
  }

  destroy() {
    this.destroyers.forEach(func => func())
  }

  handleUpgrade(id: number) {
    this.pause = false
    this.canvas?.resume()
    this.setShowCards(false)
    this.Player.upgrade(id)
  }

  private drawTimer(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.strokeStyle = 'white'
    ctx.fillStyle = '#242424'

    // Calculate the font size as 2% of the height of the canvass
    const fontSize = Math.max(14, this.CanvasHeight * 0.025) // Min size 14px
    ctx.font = `${fontSize}px pixel`
    ctx.textBaseline = 'top'

    // Scale-aware text positioning
    // Use relative positions based on fontSize
    const timerText = convertSeconds(this.timer)
    const hpText = `HP: ${this.Player.hp}`
    const lvlText = `LVL: ${this.Player.level}`

    // Timer center
    const timerX = this.CanvasWidth / 2 - ctx.measureText(timerText).width / 2
    const timerY = fontSize + 10 // Top indent

    // HP on the right
    const hpX = this.CanvasWidth - ctx.measureText(lvlText).width - 10
    const hpY = fontSize + 10

    // LVL on the left
    const lvlX = 10
    const lvlY = fontSize + 10

    // Timer rendering
    ctx.fillText(timerText, timerX, timerY)
    ctx.strokeText(timerText, timerX, timerY)

    // HP rendering
    ctx.fillText(hpText, hpX, hpY)
    ctx.strokeText(hpText, hpX, hpY)

    // LVL rendering
    ctx.fillText(lvlText, lvlX, lvlY)
    ctx.strokeText(lvlText, lvlX, lvlY)

    ctx.restore()
  }

  private finishGame() {
    this.navigate('/gameOver', {
      state: {
        time: this.timer,
        level: this.Player.level,
        diedEnemies: this.Enemies.diedEnemies,
      },
    })
  }
}

export default Game
