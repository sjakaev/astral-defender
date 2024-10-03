import { useLocation } from 'react-router-dom'
import { Button, Grid, Link, List, ListItem, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'
import LayoutWithBgImage from '../../components/LayoutWithBgImage'
import styles from './styles.module.scss'
import convertSeconds from '../../helpers/convertSeconds'
import { useAppSelector } from '../../hooks/reduxHooks'

const GameOver = () => {
  const location = useLocation()
  const { time, level, diedEnemies } = location.state

  const user = useAppSelector(state => state.user)

  return (
    <LayoutWithBgImage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Result</title>
        <meta name="description" content="Result of attempt" />
      </Helmet>
      <Grid item className={styles.title}>
        <Typography variant="h1" component="h1">
          Astral
        </Typography>
        <Typography variant="h2" component="h1">
          Defender
        </Typography>
      </Grid>
      <List sx={{ width: '100%' }}>
        <ListItem className={styles.listItem}>
          <img src="/images/time.png" alt="time" />
          <span className={styles.listTextLabel}>time</span>
          {convertSeconds(time)}
        </ListItem>
        <ListItem className={styles.listItem}>
          <img src="/images/monsters.png" alt="monsters" />
          <span className={styles.listTextLabel}>monsters</span>
          {diedEnemies}
        </ListItem>
        <ListItem className={styles.listItem}>
          <img src="/images/levels.png" alt="levels" />
          <span className={styles.listTextLabel}>levels</span>
          {level}
          {/* <div>
            {hp && (
              <div className={styles.levelsItem}>
                <img src="/images/heart.png" alt="HP" />
                <span>{hp}</span>
              </div>
            )}
            {level && (
              <div className={styles.levelsItem}>
                <img src="/images/gun.png" alt="Gun" />
                <span>{level}</span>
              </div>
            )}
          </div> */}
        </ListItem>
      </List>
      <Button
        sx={{
          marginRight: 'auto',
        }}
        type="submit"
        variant="contained"
        color="primary"
        href="/game">
        Restart
      </Button>
      <Button type="submit" variant="contained" color="secondary">
        <Link href="/main_menu">Main menu</Link>
      </Button>
    </LayoutWithBgImage>
  )
}

export default GameOver
