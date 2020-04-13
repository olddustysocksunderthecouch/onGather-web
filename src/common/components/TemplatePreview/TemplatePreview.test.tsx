import React from 'react'
import { create } from 'react-test-renderer'
import { TemplatePreview } from './TemplatePreview'

describe('TemplatePreview Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <TemplatePreview dummyText={'This is the SelectTemplate Component'} />,
    )
    expect(instance.root.type).toBe(TemplatePreview)
  })
})
