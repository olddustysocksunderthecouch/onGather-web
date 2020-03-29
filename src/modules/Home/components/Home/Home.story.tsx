import React from 'react'
import { Home, Props } from './Home'

export default {
  title: 'Views/Home',
  component: Home,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <Home dummyText={'This is the CreateMoment Component'} />
)

defaultState.story = {
  name: 'default',
}
