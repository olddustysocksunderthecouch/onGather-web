import React from 'react'
import { BrowseTemplates, Props } from './BrowseTemplates'

export default {
  title: 'Views/BrowseTemplates',
  component: BrowseTemplates,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <BrowseTemplates
    templates={[]}
    activeCategory="Popular"
    handleCategoryClicked={(): void => undefined}
    handleCreateNewTemplateClicked={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
