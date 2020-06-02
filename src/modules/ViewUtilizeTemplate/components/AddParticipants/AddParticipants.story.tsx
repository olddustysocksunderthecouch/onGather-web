import React from 'react'
import { AddParticipants } from './AddParticipants'

export default {
  title: 'Components/ViewUtilizeTemplates/AddParticipants',
  component: AddParticipants,
}

export const defaultState = (): React.ReactElement => (
  <AddParticipants handleEmailsEntered={(): void => undefined} />
)

defaultState.story = {
  name: 'default',
}
