import React from 'react'
import {
  Props,
  UpdateGuestsConfirmationModal,
} from './UpdateGuestsConfirmationModal'

export default {
  title: 'Components/Gatherings/UpdateGuestsConfirmationModal',
  component: UpdateGuestsConfirmationModal,
}

export const noInviteesState = (): React.FunctionComponentElement<Props> => (
  <UpdateGuestsConfirmationModal
    handleSendUpdates={(): void => undefined}
    handleCloseModalClicked={(): void => undefined}
    currentInviteeEmails={[]}
    newInviteeEmails={[]}
  />
)

noInviteesState.story = {
  name: 'No guests',
}

export const someInviteesState = (): React.FunctionComponentElement<Props> => (
  <UpdateGuestsConfirmationModal
    handleSendUpdates={(): void => undefined}
    handleCloseModalClicked={(): void => undefined}
    currentInviteeEmails={['adrian@gmail.com', 'someone@somthing.com']}
    newInviteeEmails={[]}
  />
)

someInviteesState.story = {
  name: 'Some Guests',
}
