import React from 'react'
import { HowItWorks } from '../HowItWorks'
import homeBackgroundImage from './../../assets/homeBackgroundImage.svg'
import homeBackgroundImage2 from './../../assets/homeBackgroundImage2.png'
import styles from './Home.module.scss'

export interface Props {
  dummyText: string
}

export const Home: React.FunctionComponent<Props> = ({ dummyText }) => (
  <div className={styles.container}>
    <section className={styles.homeSection}>
      <img
        src={homeBackgroundImage}
        alt="home background image"
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
        alt="follow icon"
        className={styles.homeBackgroundImage2}
      />
      <h1 className={styles.homePageTitle2}>
        We&apos;ve got some templates
        <br /> that will make it easy
        <br /> to bring everyone together
      </h1>
    </section>
    <HowItWorks dummyText={'also some text'} />
  </div>
)
