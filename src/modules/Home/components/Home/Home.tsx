import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HowItWorks } from '../HowItWorks'
import homeBackgroundImage from './../../assets/home-section-1.svg'
import homeBackgroundImage2 from './../../assets/home-section-2.svg'
import styles from './Home.module.scss'

export interface Props {
  handleBrowseButtonClicked: (buttonDescription: string) => void
}

export const Home: React.FunctionComponent<Props> = ({
  handleBrowseButtonClicked,
}) => {
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
        <div className={styles.homeTopContent}>
          <h1>
            Struggling to connect with your friends/ loved one’s over video
            calls?
          </h1>
          <p>
            Not seeing them in person is tough... and regular calls can get
            boring and feel like a chore
          </p>
        </div>
      </section>
      <section className={styles.homeSection2}>
        <img
          src={homeBackgroundImage2}
          alt="home background 2"
          className={styles.homeBackgroundImage2}
        />
        <div className={styles.homeSection2Content}>
          <h1 className={styles.homePageTitle2}>
            Imagine you could easily organise doing new activities on video
            calls
          </h1>
          <p>
            Picture a games night, meditation session, casual book club or semi
            structured conversations
          </p>
          <Link
            to="/browse-activities"
            onClick={(): void => handleBrowseButtonClicked('middle')}
          >
            <button className={styles.buttonSection2}>
              Browse our activities
            </button>
          </Link>
        </div>
      </section>
      <div className={styles.howItWorks}>
        <HowItWorks />
      </div>
    </div>
  )
}
