import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HowItWorks } from '../HowItWorks'
import homeBackgroundImage from './../../assets/home-section-1.svg'
import homeBackgroundImage2 from './../../assets/home-section-2.svg'
import styles from './Home.module.scss'

export const Home: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = 'Home - onGather'
  }, [])
  return (
    <div className={styles.container}>
      <section className={styles.homeSection1}>
        <img
          src={homeBackgroundImage}
          alt="home background"
          className={styles.homeBackgroundImage}
        />
        <h1 className={styles.homePageTitle}>
          Want to have more
          <br /> meaningful & fun
          <br /> video calls with friends?
        </h1>
        <Link to="/browse-templates">
          <button className={styles.buttonSection1}>Browse</button>
        </Link>
      </section>
      <section className={styles.homeSection2}>
        <img
          src={homeBackgroundImage2}
          alt="home background 2"
          className={styles.homeBackgroundImage2}
        />
        <div className={styles.homeSection2Content}>
          <h1 className={styles.homePageTitle2}>
            We&apos;ve got some
            <br /> ideas & templates
            <br /> that&apos;ll make it
            <br /> much easier
          </h1>
          <Link to="/browse-templates">
            <button className={styles.buttonSection2}>Pick One</button>
          </Link>
        </div>
      </section>
      <div className={styles.howItWorks}>
        <HowItWorks />
      </div>
    </div>
  )
}
