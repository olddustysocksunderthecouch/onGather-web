import React from 'react'
import { Home, Props } from './Home'

export default {
  title: 'Views/Home',
  component: Home,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <Home handleClick={(): void => undefined} />
)

defaultState.story = {
  name: 'default',
}
