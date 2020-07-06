import React, { useEffect } from 'react'
import { CreateNewTemplate } from '../../../../common/components/CreateNewTemplate'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { Template } from '../../../../common/types'
import { CategorySelector } from '../CategorySelector'
import styles from './BrowseTemplates.module.scss'

export interface Props {
  templates: Template[]
  activeCategory: string
  handleCategoryClicked: (category: string) => void
  handleCreateNewTemplateClicked: () => void
}

export const BrowseTemplates: React.FunctionComponent<Props> = ({
  templates,
  activeCategory,
  handleCategoryClicked,
  handleCreateNewTemplateClicked,
}) => {
  useEffect(() => {
    document.title = 'Browser'
  }, [])
  return (
    <div className={styles.container}>
      <header>
        <h1>Pick a template</h1>
        <p className={styles.browserDescription}>
          Our templates contain guides for things you could do on a video call.
          Customizing them and sending invitations (calendar/email) is super
          easy.
        </p>
      </header>
      <CategorySelector
        activeCategory={activeCategory}
        handleCategoryClicked={handleCategoryClicked}
      />
      <section className={styles.templates}>
        {templates.length > 0 ? (
          templates.map((template: Template) => {
            return (
              <TemplatePreview
                key={template.title}
                templateId={template.title}
                title={template.title}
                image={template.imageUrls?.small}
                gatheringSize={`${template.participantRange[0]} - ${template.participantRange[1]} People`}
                suggestedDuration={template.suggestedDuration}
                mainAimsOutcomes={template.mainAimsOutcomes}
                shortDescription={template.shortDescription}
                destinationPath={`/view-template/${template.templateId}`}
                handleTemplatePreviewClicked={(): void => undefined}
                openInNewTab={true}
              />
            )
          })
        ) : (
          <CreateNewTemplate
            handleCreateNewClick={handleCreateNewTemplateClicked}
          />
        )}
      </section>
    </div>
  )
}
