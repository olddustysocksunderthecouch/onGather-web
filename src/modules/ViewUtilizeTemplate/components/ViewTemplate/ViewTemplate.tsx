import React, { Fragment, useEffect } from 'react'
import { Anchorme } from 'react-anchorme'
import { Link } from 'react-router-dom'
import { durations } from '../../../../common/constants'
import { Duration, Template } from '../../../../common/types'
import PeopleIcon from './../../../../common/assets/PeopleIcon.svg'
import TimeIcon from './../../../../common/assets/TimeIcon.svg'
import styles from './ViewTemplate.module.scss'

export interface Props {
  handleUseTemplateClicked: (title: string, templateId: string) => void
  template: Template
}

export const ViewTemplate: React.FunctionComponent<Props> = ({
  template,
  handleUseTemplateClicked,
}) => {
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
    ? template.mainAimsOutcomes.join(' | ')
    : ''

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
            <h2>What we&apos;ll do</h2>
            <p className={styles.descriptionBody}>
              <Anchorme>{template.whatYouDo}</Anchorme>
            </p>
          </Fragment>
        )}
        {template.howYouDo && (
          <Fragment>
            <h2>How we&apos;ll do it</h2>
            <p className={styles.descriptionBody}>
              <Anchorme>{template.howYouDo}</Anchorme>
            </p>
          </Fragment>
        )}
        {template.hostInstructions && (
          <Fragment>
            <h2>Host Instructions</h2>
            <p className={styles.descriptionBody}>
              <Anchorme>{template.hostInstructions}</Anchorme>
            </p>
          </Fragment>
        )}
      </div>
      <Link
        to={`/edit-send-invites/${template.templateId}`}
        onClick={(): void =>
          handleUseTemplateClicked(template.title, template.templateId)
        }
      >
        <button className={styles.useThisTemplateButton}>
          Create a Gathering with this Activity
        </button>
      </Link>
    </article>
  )
}
