import React from 'react'
import { CreateNewTemplate } from '../../../../common/components/CreateNewTemplate'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { Template } from '../../../../common/types'
import { CategorySelector } from '../CategorySelector'
import styles from './BrowseTemplates.module.scss'

export interface Props {
  templates: Template[]
  activeCategory: string
  handleCategoryClicked: (category: string) => void
}

export const BrowseTemplates: React.FunctionComponent<Props> = ({
  templates,
  activeCategory,
  handleCategoryClicked,
}) => (
  <div className={styles.container}>
    <header>
      <h1>Pick a template</h1>
      <p className={styles.browserDescription}>
        We’ve got pre-populated templates appropriate for a variety of types of
        gatherings that you might want to have. Start with one of them or create
        your own template for others to find!
      </p>
    </header>
    <CategorySelector
      activeCategory={activeCategory}
      handleCategoryClicked={handleCategoryClicked}
    />
    <section className={styles.templates}>
      {templates.map((template: Template) => {
        return (
          <TemplatePreview
            key={template.title}
            templateId={template.title}
            title={template.title}
            gatheringSize={`${template.participantRange[0]} - ${template.participantRange[1]} People`}
            suggestedDuration={template.suggestedDuration}
            mainAimsOutcomes={template.mainAimsOutcomes}
            shortDescription={template.shortDescription}
            handleTemplatePreviewClicked={(): void => undefined}
          />
        )
      })}
      <CreateNewTemplate />
    </section>
  </div>
)
