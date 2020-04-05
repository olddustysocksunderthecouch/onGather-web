import React from 'react'
import { CreateTemplate, Props } from './CreateTemplate'

export default {
  title: 'Views/CreateTemplate',
  component: CreateTemplate,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <CreateTemplate dummyText={'This is the SelectTemplate Component'} />
)

defaultState.story = {
  name: 'default',
}
