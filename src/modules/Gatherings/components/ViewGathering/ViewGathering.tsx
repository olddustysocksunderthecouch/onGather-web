import React, { Fragment, useEffect } from 'react'
import { Anchorme } from 'react-anchorme'
import { Link } from 'react-router-dom'
import { Gathering } from '../../../../common/types'
import PeopleIcon from './../../../../common/assets/PeopleIcon.svg'
import TimeIcon from './../../../../common/assets/TimeIcon.svg'
import styles from './ViewGathering.module.scss'

export interface Props {
  handleUseTemplateClicked: (title: string, templateId: string) => void
  gathering: Gathering
}

export const ViewGathering: React.FunctionComponent<Props> = ({
  gathering,
  handleUseTemplateClicked,
}) => {
  useEffect(() => {
    document.title = gathering.title ? gathering.title : 'onGather'
  }, [gathering.title])

  const formattedAimsOutcomes = gathering.mainAimsOutcomes
    ? gathering.mainAimsOutcomes.join(' | ')
    : ''

  return (
    <article className={styles.viewTemplate}>
      <img
        className={styles.image}
        src={gathering.imageUrls?.regular}
        alt="Template"
      />
      <div className={styles.content}>
        <h3>{formattedAimsOutcomes}</h3>
        <h1>{gathering.title}</h1>
        <div className={styles.meta}>
          <img src={PeopleIcon} alt="People Icon" />
          {/* <h5>{gatheringSize}</h5> */}
          <img src={TimeIcon} alt="Time Icon" />
          {/* <h5>{duration.timeFormatted}</h5> */}
        </div>
        <p className={styles.shortDescription}>
          {gathering.personalizedDescription}
        </p>
        {gathering.whatYouDo && (
          <Fragment>
            <h2>What we&apos;ll do</h2>
            <p className={styles.descriptionBody}>
              <Anchorme>{gathering.whatYouDo}</Anchorme>
            </p>
          </Fragment>
        )}
        {gathering.howYouDo && (
          <Fragment>
            <h2>How we&apos;ll do it</h2>
            <p className={styles.descriptionBody}>
              <Anchorme>{gathering.howYouDo}</Anchorme>
            </p>
          </Fragment>
        )}
        {gathering.hostInstructions && (
          <Fragment>
            <h2>Host Instructions</h2>
            <p className={styles.descriptionBody}>
              <Anchorme>{gathering.hostInstructions}</Anchorme>
            </p>
          </Fragment>
        )}
      </div>
      {/* <Link
        to={`/edit-send-invites/${gathering.templateId}`}
        onClick={(): void =>
          handleUseTemplateClicked(gathering.title, gathering.templateId)
        }
      >
        <button className={styles.useThisTemplateButton}>
          Create a Gathering with this Activity
        </button>
      </Link> */}
    </article>
  )
}
