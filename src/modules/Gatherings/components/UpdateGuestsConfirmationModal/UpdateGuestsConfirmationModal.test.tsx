import React from 'react'
import { create } from 'react-test-renderer'
import { UpdateGuestsConfirmationModal } from './UpdateGuestsConfirmationModal'

describe('SendingConfirmationModal Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <UpdateGuestsConfirmationModal
        handleContinueWithClicked={(): void => undefined}
        handleCloseModalClicked={(): void => undefined}
      />,
    )
    expect(instance.root.type).toBe(UpdateGuestsConfirmationModal)
  })
})
