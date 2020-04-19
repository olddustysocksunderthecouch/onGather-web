import React from 'react'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { Template } from '../../types'
import styles from './UserTemplates.module.scss'

export interface Props {
  draftTemplates: Template[]
}

export const UserTemplates: React.FunctionComponent<Props> = ({
  draftTemplates,
}) => (
  <div className={styles.container}>
    <h1>Draft Templates</h1>
    {draftTemplates.map((template: Template) => {
      return (
        <TemplatePreview
          key={template.title}
          templateId={template.title}
          title={template.title}
          gatheringSize={'2-8 People'}
          suggestedDuration={template.suggestedDuration}
          mainAimsOutcomes={template.mainAimsOutcomes}
          shortDescription={template.shortDescription}
          handleTemplatePreviewClicked={(): void => undefined}
        />
      )
    })}
  </div>
)
