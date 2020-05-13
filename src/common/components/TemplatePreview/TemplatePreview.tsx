import React from 'react'
import { Link } from 'react-router-dom'
import { durations } from '../../constants'
import { Duration } from '../../types'
import PeopleIcon from './../../assets/PeopleIcon.svg'
import TimeIcon from './../../assets/TimeIcon.svg'
import PlaceholderImage from './assets/PlaceholderImage.jpg'
import styles from './TemplatePreview.module.scss'

export interface Props {
  templateId: string
  title?: string
  gatheringSize?: string
  suggestedDuration?: string
  mainAimsOutcomes?: string
  shortDescription?: string
  handleTemplatePreviewClicked: (templateId: string) => void
  openInNewTab?: boolean
  destinationPath: string
}

export const TemplatePreview: React.FunctionComponent<Props> = ({
  templateId,
  title,
  gatheringSize,
  suggestedDuration,
  mainAimsOutcomes,
  shortDescription,
  handleTemplatePreviewClicked,
  destinationPath,
  openInNewTab = false,
}) => {
  const duration = suggestedDuration
    ? durations.filter(
        (duration: Duration) => suggestedDuration === duration.timeMinutes,
      )[0]
    : { timeMinutes: '0', timeFormatted: '0 min' }

  const formattedAimsOutcomes = mainAimsOutcomes?.split(',').join(' | ')

  return (
    <article className={styles.templatePreview}>
      <Link
        to={destinationPath}
        onClick={(): void => handleTemplatePreviewClicked(templateId)}
        target={openInNewTab ? '_blank' : '_self'}
        className={styles.link}
      >
        <img className={styles.image} src={PlaceholderImage} alt="Template" />

        <div className={styles.content}>
          <h5>{formattedAimsOutcomes}</h5>
          <h3>{title}</h3>
          <div className={styles.meta}>
            <img src={PeopleIcon} alt="People Icon" />
            <p>{gatheringSize}</p>
            <img src={TimeIcon} alt="Time Icon" />
            <p>{duration.timeFormatted}</p>
          </div>
          <p className={styles.shortDescription}>{shortDescription}</p>
          <div className={styles.spacer} />
        </div>
        <button className={styles.viewTemplate}>View Template</button>
      </Link>
    </article>
  )
}
