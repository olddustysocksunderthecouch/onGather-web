import React from 'react'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { Template } from '../../../../common/types'
import { publishTemplateSuccess } from '../../UserTemplates.actions'
import styles from './UserTemplates.module.scss'

export interface Props {
  draftTemplates: Template[]
  publishedTemplates: Template[]
}

export const UserTemplates: React.FunctionComponent<Props> = ({
  draftTemplates,
  publishedTemplates,
}) => (
  <div>
    <section className={styles.container}>
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
    </section>
    <section className={styles.container}>
      <h1>Published Templates</h1>
      {publishTemplateSuccess.length > 0 ? (
        publishedTemplates.map((template: Template) => {
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
        })
      ) : (
        <p>You don&apos;t have any templates yet</p>
      )}
    </section>
  </div>
)
