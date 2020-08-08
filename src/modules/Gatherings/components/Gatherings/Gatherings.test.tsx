import React from 'react'
import { create } from 'react-test-renderer'
import { Gatherings } from './Gatherings'

describe('Gatherings Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <Gatherings dummyText={'This is the Gatherings Component'} />,
    )
    expect(instance.root.type).toBe(Gatherings)
  })
})
