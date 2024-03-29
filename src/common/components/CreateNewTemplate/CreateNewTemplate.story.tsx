import React from 'react'
import { CreateNewTemplate } from './CreateNewTemplate'

export default {
  title: 'Components/Common/CreateNewTemplate',
  component: CreateNewTemplate,
}

export const defaultState = (): React.ReactElement => (
  <CreateNewTemplate handleCreateNewClick={(): void => undefined} />
)

defaultState.story = {
  name: 'default',
}
