import React from 'react'
import { UpdateConfirmationModal, Props } from './UpdateConfirmationModal'

export default {
  title: 'Components/Gatherings/UpdateConfirmationModal',
  component: UpdateConfirmationModal,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <UpdateConfirmationModal
    handleSendUpdateClicked={(): void => undefined}
    handleCloseModalClicked={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
