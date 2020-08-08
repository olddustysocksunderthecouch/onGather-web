import React from 'react'
import { create } from 'react-test-renderer'
import { GatheringPreview } from './GatheringPreview'

describe('GatheringPreview Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <GatheringPreview dummyText={'This is the SelectTemplate Component'} />,
    )
    expect(instance.root.type).toBe(GatheringPreview)
  })
})
