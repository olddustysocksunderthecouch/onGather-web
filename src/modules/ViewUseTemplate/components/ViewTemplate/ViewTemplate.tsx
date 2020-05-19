import React, { Fragment, useEffect } from 'react'
import { durations } from '../../../../common/constants'
import { Duration, TemplateFirestoreResult } from '../../../../common/types'
import PeopleIcon from './../../../../common/assets/PeopleIcon.svg'
import TimeIcon from './../../../../common/assets/TimeIcon.svg'
import styles from './ViewTemplate.module.scss'

export interface Props {
  template: TemplateFirestoreResult
}

export const ViewTemplate: React.FunctionComponent<Props> = ({ template }) => {
  useEffect(() => {
    document.title = template.title ? template.title : 'onGather'
  }, [template.title])

  const duration = template.suggestedDuration
    ? durations.filter(
        (duration: Duration) =>
          template.suggestedDuration === duration.timeMinutes,
      )[0]
    : { timeMinutes: '0', timeFormatted: '0 min' }

  const formattedAimsOutcomes = template.mainAimsOutcomes
    ?.split(',')
    .join(' | ')

  const gatheringSize = template.participantRange
    ? `${template.participantRange[0]} - ${template.participantRange[1]} People`
    : '0 People'

  return (
    <article className={styles.viewTemplate}>
      <img
        className={styles.image}
        src={template.imageUrls?.regular}
        alt="Template"
      />
      <div className={styles.content}>
        <h3>{formattedAimsOutcomes}</h3>
        <h1>{template.title}</h1>
        <div className={styles.meta}>
          <img src={PeopleIcon} alt="People Icon" />
          <h5>{gatheringSize}</h5>
          <img src={TimeIcon} alt="Time Icon" />
          <h5>{duration.timeFormatted}</h5>
        </div>
        <p className={styles.shortDescription}>{template.shortDescription}</p>
        {template.whatYouDo && (
          <Fragment>
            <h2>What you&apos;ll do</h2>
            <p className={styles.descriptionBody}>{template.whatYouDo}</p>
          </Fragment>
        )}
        {template.howYouDo && (
          <Fragment>
            <h2>How you&apos;ll do it</h2>
            <p className={styles.descriptionBody}>{template.howYouDo}</p>
          </Fragment>
        )}
        {template.hostInstructions && (
          <Fragment>
            <h2>Host Instructions</h2>
            <p className={styles.descriptionBody}>
              {template.hostInstructions}
            </p>
          </Fragment>
        )}
      </div>
      <button className={styles.useThisTemplateButton}>
        Use this template
      </button>
    </article>
  )
}
