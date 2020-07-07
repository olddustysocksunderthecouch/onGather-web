import React, { Fragment } from 'react'
import CustomizedIcon from '../../assets/home-customize.svg'
import FriendsIcon from '../../assets/home-friends.svg'
import PickActivityIcon from '../../assets/home-pick-activity.svg'
import SendMailIcon from '../../assets/home-send-mail.svg'
import VideoCallIcon from '../../assets/home-video-call.svg'
import { HowItWorksItem } from '../../types'
import styles from './HowItWorks.module.scss'

const howItWorks: HowItWorksItem[] = [
  { icon: PickActivityIcon, content: 'Pick an activity' },
  { icon: CustomizedIcon, content: 'Customise the pre-written invitation' },
  {
    icon: VideoCallIcon,
    content: 'Choose & use any video calling app/service',
  },
  {
    icon: FriendsIcon,
    content: 'Add your friend’s with their email addresses',
  },
  {
    icon: SendMailIcon,
    content: `We’ll send a calendar & email invite`,
  },
]

export const HowItWorks: React.FunctionComponent = () => (
  <Fragment>
    <section className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>How it works</h2>
      <ul className={styles.howItWorksList}>
        {howItWorks.map((howItWorksItem: HowItWorksItem) => {
          return (
            <li className={styles.listItem} key={howItWorksItem.icon}>
              <img className={styles.listItemIcon} src={howItWorksItem.icon} />
              <div className={styles.listItemContent}>
                {howItWorksItem.content}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  </Fragment>
)
