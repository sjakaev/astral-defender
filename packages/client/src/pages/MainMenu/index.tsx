import { Button, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'
import Clue from '../../components/Clue'
import styles from './styles.module.scss'

const breakpointSizes = {
  fontSize: {
    xxl: '10.2rem',
    xl: '8.2rem',
    lg: '7rem',
    md: '5rem',
    sm: '4rem',
    xs: '3rem',
  },
}

function MainMenu() {
  return (
    <div className={styles['main-menu']}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Main menu</title>
        <meta name="description" content="Main menu of game" />
      </Helmet>
      <Typography
        sx={breakpointSizes}
        className={styles['main-menu_title']}
        variant="h1"
        component="h1">
        Astral Defender
      </Typography>
      <div className={styles['main-menu_buttons']}>
        <Button href="/game" variant="contained" size="large">
          Start Game
        </Button>
      </div>
      <Clue />
    </div>
  )
}

export default MainMenu
