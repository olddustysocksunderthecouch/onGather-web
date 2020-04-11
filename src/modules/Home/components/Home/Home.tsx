import React from 'react'
import { HowItWorks } from '../HowItWorks'
import homeBackgroundImage from './../../assets/homeBackgroundImage.svg'
import homeBackgroundImage2 from './../../assets/homeBackgroundImage2.png'
import styles from './Home.module.scss'

export interface Props {
  handleClick: () => void
}

export const Home: React.FunctionComponent<Props> = ({ handleClick }) => (
  <div className={styles.container}>
    <section className={styles.homeSection}>
      <img
        src={homeBackgroundImage}
        alt="home background"
        className={styles.homeBackgroundImage}
      />
      <h1 className={styles.homePageTitle}>
        Want to connect with friends
        <br /> more meaningfully
        <br /> on video calls?
      </h1>
    </section>
    <section className={styles.homeSection2}>
      <img
        src={homeBackgroundImage2}
        alt="home background 2"
        className={styles.homeBackgroundImage2}
      />
      <h1 className={styles.homePageTitle2}>
        We&apos;ve got some templates
        <br /> that will make it easy
        <br /> to bring everyone together
      </h1>
    </section>
    <HowItWorks />
  </div>
)
