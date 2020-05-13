import React from 'react'
import { create } from 'react-test-renderer'
import { ViewTemplate } from './ViewTemplate'

describe('UserTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <ViewTemplate dummyText={'This is the ViewTemplate Component'} />,
    )
    expect(instance.root.type).toBe(ViewTemplate)
  })
})
