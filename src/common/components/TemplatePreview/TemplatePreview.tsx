import React from 'react'
import { durations } from '../../constants'
import { Duration } from '../../types'
import MoreIcon from './assets/MoreIcon.svg'
import PeopleIcon from './assets/PeopleIcon.svg'
import PlaceholderImage from './assets/PlaceholderImage.jpg'
import TimeIcon from './assets/TimeIcon.svg'
import styles from './TemplatePreview.module.scss'

export interface Props {
  templateId: string
  title?: string
  gatheringSize?: string
  suggestedDuration?: string
  mainAimsOutcomes?: string
  shortDescription?: string
  handleTemplatePreviewClicked: (templateId: string) => void
}

export const TemplatePreview: React.FunctionComponent<Props> = ({
  templateId,
  title,
  gatheringSize,
  suggestedDuration,
  mainAimsOutcomes,
  shortDescription,
  handleTemplatePreviewClicked,
}) => {
  const duration = suggestedDuration
    ? durations.filter(
        (duration: Duration) => suggestedDuration === duration.timeMinutes,
      )[0]
    : { timeMinutes: '15', timeFormatted: '15 min' }

  const formattedAimsOutcomes = mainAimsOutcomes?.split(',').join(' | ')
  return (
    <article
      className={styles.templatePreview}
      onClick={(): void => handleTemplatePreviewClicked(templateId)}
    >
      <div className={styles.top}>
        <img
          className={styles.image}
          src={PlaceholderImage}
          alt="Template Image"
        />
        <div className={styles.titleMeta}>
          <h3>{title}</h3>
          <div className={styles.meta}>
            <img src={PeopleIcon} alt="People Icon" />
            <p>{gatheringSize}</p>
            <img src={TimeIcon} alt="Time Icon" />
            <p>{duration.timeFormatted}</p>
          </div>
          <div className={styles.bodyDesktop}>
            <h5>{formattedAimsOutcomes}</h5>
            <p>{shortDescription}</p>
          </div>
          <div className={styles.moreDesktop}>
            <h4>MORE INFO</h4>
            <img src={MoreIcon} alt="More Icon" />
          </div>
        </div>
      </div>
      <div className={styles.bodyMobile}>
        <h5>{formattedAimsOutcomes}</h5>
        <p>{shortDescription}</p>
      </div>
      <div className={styles.moreMobile}>
        <button>MORE INFO</button>
        <img src={MoreIcon} alt="More Icon" />
      </div>
    </article>
  )
}
