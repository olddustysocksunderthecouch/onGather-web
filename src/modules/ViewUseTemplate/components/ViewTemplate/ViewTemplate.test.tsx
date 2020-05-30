import React from 'react'
import { create } from 'react-test-renderer'
import { ViewTemplate } from './ViewTemplate'

describe('UserTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <ViewTemplate
        handleUseTemplateClicked={(): void => undefined}
        template={undefined}
      />,
    )
    expect(instance.root.type).toBe(ViewTemplate)
  })
})
