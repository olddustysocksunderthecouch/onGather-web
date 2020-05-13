import React from 'react'
import { create } from 'react-test-renderer'
import { UseTemplate } from './UseTemplate'

describe('UserTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <UseTemplate dummyText={'This is the UseTemplate Component'} />,
    )
    expect(instance.root.type).toBe(UseTemplate)
  })
})
