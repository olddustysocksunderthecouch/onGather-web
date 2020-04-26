import React from 'react'
import { create } from 'react-test-renderer'
import { CategorySelector } from './CategorySelector'

describe('CategorySelector Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <CategorySelector
        handleCategoryClicked={(): void => undefined}
        activeCategory={'Popular'}
      />,
    )
    expect(instance.root.type).toBe(CategorySelector)
  })
})
