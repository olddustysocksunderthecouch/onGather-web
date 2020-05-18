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
}) => {
  const gatheringSize = (participantRange: number[]): string =>
    participantRange && participantRange.length > 1
      ? `${participantRange[0]} - ${participantRange[1]} People`
      : 'None'
  return (
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
            <CreateNewTemplate
              handleCreateNewClick={handleCreateNewTemplateClicked}
            />
          ) : (
            draftTemplates.map((template: Template) => {
              return (
                <TemplatePreview
                  key={template.templateId}
                  templateId={template.templateId}
                  title={template.title}
                  image={template.imageUrls?.small}
                  gatheringSize={gatheringSize(template.participantRange)}
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
            <CreateNewTemplate
              handleCreateNewClick={handleCreateNewTemplateClicked}
            />
          ) : (
            publishedTemplates.map((template: Template) => {
              return (
                <TemplatePreview
                  key={template.templateId}
                  templateId={template.templateId}
                  title={template.title}
                  image={template.imageUrls?.small}
                  gatheringSize={gatheringSize(template.participantRange)}
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
}
