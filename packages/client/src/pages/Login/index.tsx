import { Button, Typography } from '@mui/material'
import style from './styles.module.scss'
import { Helmet } from 'react-helmet'
import React from 'react'
import Clue from '../../components/Clue'

function Login() {
  return (
    <section className={style.login}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In</title>
        <meta name="description" content="Sign In" />
      </Helmet>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <Typography variant="h1" component="h1">
              BUGS
            </Typography>
            <Typography variant="h2" component="h1">
              SURVIVORS
            </Typography>
          </div>
          <Button href="/game" variant="contained" color="primary">
            Demo
          </Button>
        </div>
      </div>
      <Clue />
    </section>
  )
}

export default Login
