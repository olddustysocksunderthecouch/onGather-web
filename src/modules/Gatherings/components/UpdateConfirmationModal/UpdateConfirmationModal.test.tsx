import React from 'react'
import { create } from 'react-test-renderer'
import { UpdateConfirmationModal } from './UpdateConfirmationModal'

describe('SendingConfirmationModal Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <UpdateConfirmationModal
        handleSendUpdateClicked={(): void => undefined}
        handleCloseModalClicked={(): void => undefined}
      />,
    )
    expect(instance.root.type).toBe(UpdateConfirmationModal)
  })
})
