import { useEffect, useRef } from 'react'
import CanvasController from './controller'
import { IGame } from './interfaces'
import styles from './styles.module.scss'

export default function Canvas({ game }: { game: IGame }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvasController = new CanvasController(canvasRef.current, game)

      return () => canvasController.stop()
    }
  }, [canvasRef, game])

  return <canvas className={styles.canvas} ref={canvasRef} />
}
