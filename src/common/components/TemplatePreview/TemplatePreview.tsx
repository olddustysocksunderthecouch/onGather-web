import React from 'react'
import MoreIcon from './assets/MoreIcon.svg'
import PeopleIcon from './assets/PeopleIcon.svg'
import PlaceholderImage from './assets/PlaceholderImage.jpg'
import TimeIcon from './assets/TimeIcon.svg'
import styles from './TemplatePreview.module.scss'

export interface Props {
  templateId?: string
  title?: string
  gatheringSize?: string
  suggestedDuration?: string
  mainAimsOutcomes?: string
  shortDescription?: string
  handleTemplatePreviewClicked: (templateId?: string) => void
}

export const TemplatePreview: React.FunctionComponent<Props> = ({
  templateId,
  title,
  gatheringSize,
  suggestedDuration,
  mainAimsOutcomes,
  shortDescription,
  handleTemplatePreviewClicked,
}) => (
  <div
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
        <h2>{title}</h2>
        <div className={styles.meta}>
          <img src={PeopleIcon} alt="People Icon" />
          <p>{gatheringSize}</p>
          <img src={TimeIcon} alt="Time Icon" />
          <p>{suggestedDuration}</p>
        </div>
        <div className={styles.bodyDesktop}>
          <h3>{mainAimsOutcomes}</h3>
          <p>{shortDescription}</p>
        </div>
        <div className={styles.moreDesktop}>
          <h4>MORE INFO</h4>
          <img src={MoreIcon} alt="More Icon" />
        </div>
      </div>
    </div>
    <div className={styles.bodyMobile}>
      <p>{shortDescription}</p>
      <h3>{mainAimsOutcomes}</h3>
    </div>
    <div className={styles.moreMobile}>
      <h4>MORE INFO</h4>
      <img src={MoreIcon} alt="More Icon" />
    </div>
  </div>
)
