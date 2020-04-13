import React from 'react'
import MoreIcon from './assets/MoreIcon.svg'
import PeopleIcon from './assets/PeopleIcon.svg'
import PlaceholderImage from './assets/PlaceholderImage.jpg'
import TimeIcon from './assets/TimeIcon.svg'
import styles from './TemplatePreview.module.scss'

export interface Props {
  templateId: string
  title: string
  gatheringSize: string
  suggestedDuration: string
  mainAimsOutcomes: string
  shortDescription: string
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
}) => (
  <div
    className={styles.templatePreview}
    onClick={(): void => handleTemplatePreviewClicked(templateId)}
  >
    <img src={PlaceholderImage} alt="Template Image" />

    <div>
      <h2>{title}</h2>
      <div>
        <img src={PeopleIcon} alt="People Icon" />
        <p>{gatheringSize}</p>
        <img src={TimeIcon} alt="Time Icon" />
        <p>{suggestedDuration}</p>
      </div>
    </div>
    <h3>{mainAimsOutcomes}</h3>
    <p>{shortDescription}</p>
    <div>
      <h4>MORE</h4>
      <img src={MoreIcon} alt="More Icon" />
    </div>
  </div>
)
