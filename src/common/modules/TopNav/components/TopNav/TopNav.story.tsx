import { State, Store } from '@sambego/storybook-state'
import React from 'react'
import { NavigationItem } from '../../types'
import { Props, TopNav } from './TopNav'

export default {
  title: 'Elements/TopNav',
  component: TopNav,
}

const store = new Store({
  selectedNavigationItem: NavigationItem.Create,
})

const handleNavigationItemClicked = (
  selectedNavigationItem: NavigationItem,
): void => store.set({ selectedNavigationItem })

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <State store={store}>
    <TopNav
      profilePic="https://lh3.googleusercontent.com/a-/AOh14GgKxMbiOlVx7GCEFpCqLZsF6udEzBDOZiMqKyw5"
      displayName="Adrian Bunge"
      topNavButton={{ text: 'Templates', path: '/templates' }}
      isAuthenticated={false}
      handleHomeClicked={(): void => undefined}
      handleNavigationItemClicked={handleNavigationItemClicked}
      selectedNavigationItem={store.get('selectedNavigationItem')}
    />
  </State>
)

defaultState.story = {
  name: 'default',
}

export const isAuthenticatedState = (): React.FunctionComponentElement<
  Props
> => (
  <State store={store}>
    <TopNav
      profilePic="https://lh3.googleusercontent.com/a-/AOh14GgKxMbiOlVx7GCEFpCqLZsF6udEzBDOZiMqKyw5"
      displayName="Adrian Bunge"
      topNavButton={{ text: 'Templates', path: '/templates' }}
      isAuthenticated
      handleHomeClicked={(): void => undefined}
      handleNavigationItemClicked={handleNavigationItemClicked}
      selectedNavigationItem={store.get('selectedNavigationItem')}
    />
  </State>
)

isAuthenticatedState.story = {
  name: 'is authenticated',
}
