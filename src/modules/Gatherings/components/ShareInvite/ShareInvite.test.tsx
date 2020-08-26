import React from 'react'
import { create } from 'react-test-renderer'
import { ShareInvite } from './ShareInvite'

describe('ShareInvite Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<ShareInvite />)
    expect(instance.root.type).toBe(ShareInvite)
  })
})
