import React from 'react'
import { Link } from 'react-router-dom'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { Template } from '../../../../common/types'
import styles from './UserTemplates.module.scss'

export interface Props {
  draftTemplates: Template[]
  publishedTemplates: Template[]
}

export const UserTemplates: React.FunctionComponent<Props> = ({
  draftTemplates,
  publishedTemplates,
}) => (
  <div className={styles.container}>
    <section>
      <div className={styles.draftTitle}>
        <h1>Draft Templates</h1>
        <Link to="/create-template">
          <button className={styles.createTemplateButton}>Create New</button>
        </Link>
      </div>
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
    <section>
      <h1>Published Templates</h1>
      {publishedTemplates.length > 0 ? (
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
