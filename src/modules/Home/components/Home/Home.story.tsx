import React from 'react'
import { Home } from './Home'

export default {
  title: 'Views/Home',
  component: Home,
}

export const defaultState = (): React.ReactElement => <Home />

defaultState.story = {
  name: 'default',
}
