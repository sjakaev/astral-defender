import { Button, Typography } from '@mui/material'
import style from './styles.module.scss'
import { Helmet } from 'react-helmet'
import Clue from '../../components/Clue'

const breakpointSizes = {
    fontSize: {
      xxl: '7.2rem',
      xl: '6.2rem',
      lg: '6rem',
      md: '5rem',
      sm: '4.2rem',
      xs: '3rem',
    },
  }

function Login() {
  return (
    <section className={style.login}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Astral Defender</title>
        <meta name="description" content="Sign In" />
      </Helmet>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <Typography sx={breakpointSizes} variant="h1" component="h1">
              Astral
            </Typography>
            <Typography variant="h2" component="h1">
              Defender
            </Typography>
          </div>
          <Button href="/game" variant="contained" color="primary" size="large">
            Start
          </Button>
        </div>
      </div>
      <Clue />
    </section>
  )
}

export default Login
