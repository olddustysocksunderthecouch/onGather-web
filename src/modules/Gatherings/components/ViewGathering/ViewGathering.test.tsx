import React from 'react'
import { create } from 'react-test-renderer'
import { ViewGathering } from './ViewGathering'

describe('UserTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <ViewGathering
        handleUseTemplateClicked={(): void => undefined}
        template={undefined}
      />,
    )
    expect(instance.root.type).toBe(ViewGathering)
  })
})
