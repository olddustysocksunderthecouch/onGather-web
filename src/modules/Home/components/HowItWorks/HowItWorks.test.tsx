import React from 'react'
import { create } from 'react-test-renderer'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <HowItWorks dummyText={'This is the SelectTemplate Component'} />,
    )
    expect(instance.root.type).toBe(HowItWorks)
  })
})
