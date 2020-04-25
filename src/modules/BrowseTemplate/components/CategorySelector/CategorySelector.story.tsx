import React from 'react'
import { CategorySelector, Props } from './CategorySelector'

export default {
  title: 'Components/BrowseTemplates/CategorySelector',
  component: CategorySelector,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <CategorySelector
    selectedCategory={'Book Club'}
    handleCategoryPicked={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
