import React, { useEffect } from 'react'
import { CreateNewTemplate } from '../../../../common/components/CreateNewTemplate'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { useWindowDimensions } from '../../../../common/hooks'
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
    document.title = 'Activity Browser'
  }, [])
  const { width } = useWindowDimensions()

  const openInNewTab = width > 1000

  return (
    <div className={styles.container}>
      <header>
        <h1>Pick an activity</h1>
        <p className={styles.browserDescription}>
          Each activity contains a guide for something you could do on a video
          call. Pick one, customize it, then send it (calendar/email) -
          it&apos;s that easy
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
                destinationPath={`/activity/${template.templateId}`}
                handleTemplatePreviewClicked={(): void => undefined}
                openInNewTab={openInNewTab}
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
