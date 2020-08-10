import React from 'react'
import { Props, SendingConfirmationModal } from './SendingConfirmationModal'

export default {
  title: 'Components/ViewUtilizeTemplate/SendingConfirmationModal',
  component: SendingConfirmationModal,
}

export const noInviteesState = (): React.FunctionComponentElement<Props> => (
  <SendingConfirmationModal
    handleContinueWithClicked={(): void => undefined}
    handleCloseModalClicked={(): void => undefined}
    inviteeEmails={[]}
  />
)

noInviteesState.story = {
  name: 'No guests',
}

export const someInviteesState = (): React.FunctionComponentElement<Props> => (
  <SendingConfirmationModal
    handleContinueWithClicked={(): void => undefined}
    handleCloseModalClicked={(): void => undefined}
    inviteeEmails={['adrian@gmail.com', 'someone@somthing.com']}
  />
)

someInviteesState.story = {
  name: 'Some Guests',
}
