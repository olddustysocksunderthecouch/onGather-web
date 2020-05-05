import { State, Store } from '@sambego/storybook-state'
import React from 'react'
import { NavigationItem } from '../../types'
import { Props, SignedInMenu } from './SignedInMenu'

export default {
  title: 'Components/TopNav/SignedInMenu',
  component: SignedInMenu,
}

const store = new Store({
  selectedNavigationItem: NavigationItem.Create,
})

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <State store={store}>
    <SignedInMenu
      displayName="Adrian Bunge"
      profilePic="https://lh3.googleusercontent.com/a-/AOh14GgKxMbiOlVx7GCEFpCqLZsF6udEzBDOZiMqKyw5"
    />
  </State>
)

defaultState.story = {
  name: 'default',
}
