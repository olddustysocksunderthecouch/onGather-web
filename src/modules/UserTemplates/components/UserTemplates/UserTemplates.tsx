import React from 'react'
import { Link } from 'react-router-dom'
import createTemplateIcon from '../../../../common/assets/create-template-icon.svg'
import { CreateNewTemplate } from '../../../../common/components/CreateNewTemplate'
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
      <div className={styles.templatePreviews}>
        {draftTemplates.length < 1 ? (
          <CreateNewTemplate />
        ) : (
          draftTemplates.map((template: Template) => {
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
                destinationPath="/create-template"
                handleTemplatePreviewClicked={(templateId: string): void =>
                  handleTemplateClicked(templateId, 'userDrafts')
                }
              />
            )
          })
        )}
      </div>
    </section>
    <section>
      <h2>Published</h2>
      <div className={styles.templatePreviews}>
        {publishedTemplates.length < 1 ? (
          <CreateNewTemplate />
        ) : (
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
                destinationPath="/create-template"
                handleTemplatePreviewClicked={(): void =>
                  handleTemplateClicked(template.templateId, 'userPublished')
                }
              />
            )
          })
        )}
      </div>
    </section>
  </div>
)
