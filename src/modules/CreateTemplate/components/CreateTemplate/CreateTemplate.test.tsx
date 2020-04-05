import React from 'react'
import { create } from 'react-test-renderer'
import { CreateTemplate } from './CreateTemplate'

describe('CreateTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <CreateTemplate dummyText={'This is the SelectTemplate Component'} />,
    )
    expect(instance.root.type).toBe(CreateTemplate)
  })
})
