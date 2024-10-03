import clsx from 'clsx'
import { Helmet } from 'react-helmet'
import { Typography } from '@mui/material'
import PreviousPageBtn from '../../components/PreviousPageBtn'
import styles from './styles.module.scss'

const Guide = () => {
  return (
    <section className={styles.section}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guide</title>
        <meta name="description" content="Guide" />
      </Helmet>
      <div className={styles.progressbar} />
      <div className={clsx('container', styles.wrapper)}>
        <div className={styles.header}>
          <PreviousPageBtn />
          <Typography variant="h4">Level progress</Typography>
        </div>
        <img className={styles.image} src="images/guide.png" alt="" />
        <ul className={styles.monsterList}>
          <li>
            <img src="images/monster1.png" alt="monster-john" />
            <span>1 lvl</span>
            <span>2 hp</span>
            <span>0 min</span>
          </li>
          <li>
            <img src="images/monster2.png" alt="monster-arnold" />
            <span>2 lvl</span>
            <span>6 hp</span>
            <span>2 min</span>
          </li>
          <li>
            <img src="images/monster3.png" alt="monster-pit" />
            <span>3 lvl</span>
            <span>10 hp</span>
            <span>4 min</span>
          </li>
          <li>
            <img src="images/monster4.png" alt="monster-alex" />
            <span>4 lvl</span>
            <span>14 hp</span>
            <span>6 min</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Guide
