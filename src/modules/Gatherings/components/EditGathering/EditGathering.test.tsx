import React from 'react'
import { create } from 'react-test-renderer'
import { EditGathering } from './EditGathering'

describe('EditGathering Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <EditGathering dummyText={'This is the UtilizeTemplate Component'} />,
    )
    expect(instance.root.type).toBe(EditGathering)
  })
})
