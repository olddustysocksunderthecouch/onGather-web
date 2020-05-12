import React from 'react'
import { Link } from 'react-router-dom'
import createTemplateIcon from '../../../../common/assets/create-template-icon.svg'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { Template } from '../../../../common/types'
import styles from './UserTemplates.module.scss'

export interface Props {
  draftTemplates: Template[]
  publishedTemplates: Template[]
  handleTemplateClicked: (templateId: string, type: string) => void
  handleCreateNewTemplateClicked: () => void
}

export const UserTemplates: React.FunctionComponent<Props> = ({
  draftTemplates,
  publishedTemplates,
  handleTemplateClicked,
  handleCreateNewTemplateClicked,
}) => (
  <div className={styles.container}>
    <h1>Your Templates</h1>
    <section>
      <div className={styles.draftTitle}>
        <h2>Drafts</h2>
        <Link to="/create-template" onClick={handleCreateNewTemplateClicked}>
          <button className={styles.createTemplateButton}>
            <div>Create New</div>
            <img
              src={createTemplateIcon}
              alt="create template"
              className={styles.createTemplateIcon}
            />
          </button>
        </Link>
      </div>
      {draftTemplates.map((template: Template) => {
        const gatheringSize =
          template.participantRange && template.participantRange.length > 1
            ? `${template.participantRange[0]} - ${template.participantRange[1]} People`
            : 'None'
        return (
          <TemplatePreview
            key={template.templateId}
            templateId={template.templateId}
            title={template.title}
            gatheringSize={gatheringSize}
            suggestedDuration={template.suggestedDuration}
            mainAimsOutcomes={template.mainAimsOutcomes}
            shortDescription={template.shortDescription}
            handleTemplatePreviewClicked={(templateId: string): void =>
              handleTemplateClicked(templateId, 'userDrafts')
            }
          />
        )
      })}
    </section>
    <section>
      <h2>Published</h2>
      {publishedTemplates.length > 0 ? (
        publishedTemplates.map((template: Template) => {
          return (
            <TemplatePreview
              key={template.templateId}
              templateId={template.templateId}
              title={template.title}
              gatheringSize={'2-8 People'}
              suggestedDuration={template.suggestedDuration}
              mainAimsOutcomes={template.mainAimsOutcomes}
              shortDescription={template.shortDescription}
              handleTemplatePreviewClicked={(templateId: string): void =>
                handleTemplateClicked(templateId, 'userPublished')
              }
            />
          )
        })
      ) : (
        <p>You don&apos;t have any templates yet</p>
      )}
    </section>
  </div>
)
