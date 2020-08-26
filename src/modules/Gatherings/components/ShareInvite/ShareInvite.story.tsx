import React from 'react'
import { ShareInvite } from './ShareInvite'

export default {
  title: 'Components/Gatherings/ShareInvite',
  component: ShareInvite,
}

export const defaultState = (): React.ReactElement => (
  <ShareInvite
    onChange={(): void => undefined}
    value={[]}
    invitedGuestEmails={[]}
    handleCloseModalClicked={(): void => undefined}
    handleUpdateInvitees={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
