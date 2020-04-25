import React from 'react'
import { create } from 'react-test-renderer'
import { BrowseTemplates } from './BrowseTemplates'

describe('BrowseTemplates Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<BrowseTemplates templates={[]} />)
    expect(instance.root.type).toBe(BrowseTemplates)
  })
})
