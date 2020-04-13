import React from 'react'
import { UserTemplate, Props } from './UserTemplate'

export default {
  title: 'Views/UserTemplate',
  component: UserTemplate,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <UserTemplate dummyText={'This is the SelectTemplate Component'} />
)

defaultState.story = {
  name: 'default',
}
