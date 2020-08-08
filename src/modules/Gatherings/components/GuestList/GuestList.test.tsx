import React from 'react'
import { create } from 'react-test-renderer'
import { GuestList } from './GuestList'

describe('GuestList Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<GuestList emails={[]} />)
    expect(instance.root.type).toBe(GuestList)
  })
})
