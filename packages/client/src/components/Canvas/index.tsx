import { useEffect, useRef } from 'react'
import CanvasController from './controller'
import { IGame } from './interfaces'
import styles from './styles.module.scss'

export default function Canvas({ game }: { game: IGame }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = new CanvasController(canvasRef.current, game)

      return () => canvas.stop()
    }
  }, [canvasRef])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        const backgroundImage = new Image()
        backgroundImage.src = '/images/game-background.png'
        backgroundImage.onload = () => {
          ctx.drawImage(backgroundImage, 0, 0, canvasRef.current!.width, canvasRef.current!.height)
        }
      }
    }
  }, [canvasRef])

  return <canvas className={styles.canvas} ref={canvasRef} />
}
