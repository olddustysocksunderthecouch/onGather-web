import React from 'react'
import { TemplatePreview } from '../../../../common/components/TemplatePreview'
import { Template } from '../../../UserTemplates/types'
import { CategorySelector } from '../CategorySelector'
import styles from './BrowseTemplates.module.scss'

export interface Props {
  templates: Template[]
}

export const BrowseTemplates: React.FunctionComponent<Props> = ({
  templates,
}) => (
  <div className={styles.container}>
    <header>
      <h1>Pick a template</h1>
      <p>
        Some text explaining some things. Sometimes it explains even more things
        about things that you’ve never heard of.
      </p>
    </header>
    <CategorySelector
      selectedCategory="Book club"
      handleCategoryPicked={(): void => undefined}
    />
    {templates.map((template: Template) => {
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
