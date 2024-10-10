import { useCallback, useEffect, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Cards from './Game/Cards'
import styles from './styles.module.scss'
import Game from './Game'
import { useNavigate } from 'react-router-dom'
import Canvas from '../../components/Canvas'
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import { useFullScreen } from '../../hooks/useFullScreen'
import JoystickComponent from '../../components/JoystickComponent/JoystickComponent';
import { IJoystickUpdateEvent } from '../../components/JoystickComponent/interfaces'

function GamePage() {
  const [showCards, setShowCards] = useState(false)
  const navigate = useNavigate()
  const [game, setGame] = useState<Game | null>(null)
  const { isFullScreen, toggleFullScreen } = useFullScreen()

  const gameRef = useRef<Game | null>(null);

  useEffect(() => {
    if (game === null && typeof window !== 'undefined') {
      setGame(new Game(setShowCards, navigate))
    }
  }, [game, navigate])

  const handleUpgrade = useCallback(
    (id: number) => game?.handleUpgrade(id),
    [game]
  )

  const handleJoystickMove = useCallback(
    (event: IJoystickUpdateEvent) => {
      gameRef.current?.handleJoystickMove(event);
    },
    []
  );

  const handleJoystickStop = useCallback(() => {
    gameRef.current?.handleJoystickStop();
  }, []);

  return (
    <div className={styles.canvas_container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Astral Defender</title>
        <meta name="description" content="Game Astral Defender" />
      </Helmet>
      {showCards && <Cards upgradePick={handleUpgrade} />}
      {game && <Canvas game={game} />}
      <JoystickComponent onMove={handleJoystickMove} onStop={handleJoystickStop} />
      <div className={styles.button_container}>
        <IconButton
          onClick={toggleFullScreen}
          disableRipple={true}
          sx={{ padding: '0.3rem', marginRight: '2rem'  }}>
          {isFullScreen ? (
            <FullscreenExitIcon sx={{ fontSize: '4rem' }} />
          ) : (
            <FullscreenIcon sx={{ fontSize: '4rem' }} />
          )}
        </IconButton>
        <Button href="/main_menu" variant="contained" color="primary">
          Exit
        </Button>
      </div>
    </div>
  )
}

export default GamePage
