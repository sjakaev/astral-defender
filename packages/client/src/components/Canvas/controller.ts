import { IGame } from './interfaces'

class CanvasController {
  animationFrameId?: number
  isPause = false
  backgroundX = 0 // Pd346

  constructor(public canvas: HTMLCanvasElement, private game: IGame) {
    this.game.canvas = this
    this.game.init()
  }

  initAnimate() {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) {
      return
    }
    ctx.imageSmoothingEnabled = false

    let lastFrameTime = performance.now()
    const fpsInterval = 1000 / 60

    const animate = (timestamp: number) => {
      this.animationFrameId = requestAnimationFrame(animate)

      const elapsed = timestamp - lastFrameTime

      if (elapsed > fpsInterval) {
        lastFrameTime = timestamp - (elapsed % fpsInterval)

        if (!this.isPause) {
          this.clearCanvas(ctx)
          this.moveBackground(ctx) // P60d3
          this.game.render(ctx)
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(animate)
  }

  private clearCanvas(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  private moveBackground(ctx: CanvasRenderingContext2D) { // P0a18
    const backgroundImage = new Image()
    backgroundImage.src = '/images/game-background.png'
    backgroundImage.onload = () => {
      this.backgroundX -= 2
      if (this.backgroundX <= -this.canvas.width) {
        this.backgroundX = 0
      }
      ctx.drawImage(backgroundImage, this.backgroundX, 0, this.canvas.width, this.canvas.height)
      ctx.drawImage(backgroundImage, this.backgroundX + this.canvas.width, 0, this.canvas.width, this.canvas.height)
    }
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
      this.game.destroy()
    }
  }

  pause() {
    this.isPause = true
  }

  resume() {
    this.isPause = false
  }
}

export default CanvasController
