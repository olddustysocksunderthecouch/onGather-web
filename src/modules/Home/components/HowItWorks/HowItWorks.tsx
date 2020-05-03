import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { HowItWorksItem } from '../../types'
import createTemplateIcon from './../../assets/create-template-icon.svg'
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
  <Fragment>
    <section className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>How it works</h2>
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
    <section className={styles.wantToHelp}>
      <h2 className={styles.sectionTitle}>Wanna help make templates?</h2>
      <p>
        We&apos;ve only been running for a handful of days and our community
        could sure use your help!
      </p>
      <Link to="/user-templates">
        <button>
          <img
            src={createTemplateIcon}
            alt="create template"
            className={styles.createTemplateIcon}
          />
          Create a template
        </button>
      </Link>
    </section>
  </Fragment>
)
