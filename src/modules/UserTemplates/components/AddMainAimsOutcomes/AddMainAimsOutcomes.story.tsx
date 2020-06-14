import React from 'react'
import { AddMainAimsOutcomes } from './AddMainAimsOutcomes'

export default {
  title: 'Components/UserTemplates/AddMainAimsOutcomes',
  component: AddMainAimsOutcomes,
}

export const defaultState = (): React.ReactElement => (
  <AddMainAimsOutcomes onChange={(): void => undefined} value={[]} />
)

defaultState.story = {
  name: 'default',
}
