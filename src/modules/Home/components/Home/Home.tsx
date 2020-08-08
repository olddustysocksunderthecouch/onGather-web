import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HowItWorks } from '../HowItWorks'
import homeBackgroundImage from './../../assets/home-section-1.svg'
import homeBackgroundImage2 from './../../assets/home-section-2.svg'
import homeBackgroundImage3 from './../../assets/home-section-3.png'
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
          <h1>Struggling to connect with your friends over video calls?</h1>
          <p>
            Not seeing them in person is tough... and regular calls can get
            boring and feel like a chore
          </p>
          <Link
            to="/browse-activities"
            onClick={(): void => handleBrowseButtonClicked('top')}
          >
            <button className={styles.buttonYellow}>Find an activity</button>
          </Link>
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
            Organise a fun remote activity in less than a minute!
          </h1>
          <p>
            Craft Projects, Chess, Monopoly, Meditation, Book Club & much more
          </p>
          <Link
            to="/browse-activities"
            onClick={(): void => handleBrowseButtonClicked('middle')}
          >
            <button className={styles.buttonRed}>Browse our activities</button>
          </Link>
        </div>
      </section>
      <section className={styles.homeSection3}>
        <div className={styles.homeSection3Content}>
          <h1 className={styles.homePageTitle2}>
            Be the person that makes video calls fun & exciting
          </h1>
          <p>
            Just pick an activity, set a date & invite your friends.
            <br />
            Then we&apos;ll send everyone a beautiful invitation on email &
            calendar!
          </p>
          <Link
            to="/browse-activities"
            onClick={(): void => handleBrowseButtonClicked('bottom')}
          >
            <button className={styles.buttonYellow}>Find an activity</button>
          </Link>
        </div>
        <img
          src={homeBackgroundImage3}
          alt="home background 3"
          className={styles.homeBackgroundImage3}
        />
      </section>

      <div className={styles.howItWorks}>
        <HowItWorks />
      </div>
    </div>
  )
}
