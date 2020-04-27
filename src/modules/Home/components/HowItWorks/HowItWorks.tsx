import React from 'react'
import { HowItWorksItem } from '../../types'
import styles from './HowItWorks.module.scss'

const howItWorks: HowItWorksItem[] = [
  { number: '#1', content: 'Pick a template' },
  { number: '#2', content: 'Edit a pre-written invitation' },
  { number: '#3', content: 'Enter friend’s emails' },
  {
    number: '#4',
    content: `We send everyone a Google Calendar invite`,
  },
]

export const HowItWorks: React.FunctionComponent = () => (
  <section className={styles.howItWorks}>
    <h1 className={styles.sectionTitle}>How it works</h1>
    <ul className={styles.howItWorksList}>
      {howItWorks.map((howItWorksItem: HowItWorksItem) => {
        return (
          <li className={styles.listItem} key={howItWorksItem.number}>
            <p className={styles.listItemNumber}>{howItWorksItem.number}</p>
            <p className={styles.listItemContent}>{howItWorksItem.content}</p>
          </li>
        )
      })}
    </ul>
  </section>
)
