import React from 'react'
import { SendingConfirmationModal, Props } from './SendingConfirmationModal'

export default {
  title: 'Components/ViewUtilizeTemplate/SendingConfirmationModal',
  component: SendingConfirmationModal,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <SendingConfirmationModal
    handleContinueWithClicked={(): void => undefined}
    handleCloseModalClicked={(): void => undefined}
    inviteeEmails={[]}
  />
)

defaultState.story = {
  name: 'default',
}
