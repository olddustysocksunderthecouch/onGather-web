import React from 'react'
import { SelectTemplate, Props } from './SelectTemplate'

export default {
  title: 'Views/SelectTemplate',
  component: SelectTemplate,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <SelectTemplate dummyText={'This is the SelectTemplate Component'} />
)

defaultState.story = {
  name: 'default',
}
