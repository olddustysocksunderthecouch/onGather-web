import React from 'react'
import { create } from 'react-test-renderer'
import { AuthModal } from './AuthModal'

describe('AuthModal Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <AuthModal handleContinueWithClicked={(): void => undefined} />,
    )
    expect(instance.root.type).toBe(AuthModal)
  })
})
