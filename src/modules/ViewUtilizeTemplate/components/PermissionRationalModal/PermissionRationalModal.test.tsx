import React from 'react'
import { create } from 'react-test-renderer'
import { PermissionRationalModal } from './PermissionRationalModal'

describe('PermissionRationalModal Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <PermissionRationalModal
        handleContinueWithClicked={(): void => undefined}
        userEmail="adrian@nona.digital"
        handleAuthModalClose={(): void => undefined}
      />,
    )
    expect(instance.root.type).toBe(PermissionRationalModal)
  })
})
