import React from 'react'
import { create } from 'react-test-renderer'
import { SignedInMenu } from './SignedInMenu'

describe('SignedInMenu Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<SignedInMenu />)
    expect(instance.root.type).toBe(SignedInMenu)
  })
})
