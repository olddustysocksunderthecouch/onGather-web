import React from 'react'
import { create } from 'react-test-renderer'
import { SummaryDetails } from './SummaryDetails'

describe('SummaryDetails Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <SummaryDetails
        handleUseTemplateClicked={(): void => undefined}
        template={undefined}
      />,
    )
    expect(instance.root.type).toBe(SummaryDetails)
  })
})
