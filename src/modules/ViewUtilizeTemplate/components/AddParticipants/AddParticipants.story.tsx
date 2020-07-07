import React from 'react'
import { AddParticipants } from './AddParticipants'

export default {
  title: 'Components/ViewUtilizeTemplate/AddParticipants',
  component: AddParticipants,
}

export const defaultState = (): React.ReactElement => (
  <AddParticipants onChange={(): void => undefined} value={[]} />
)

defaultState.story = {
  name: 'default',
}
