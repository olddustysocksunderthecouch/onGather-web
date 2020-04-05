import { State, Store } from '@sambego/storybook-state'
import React from 'react'
import { NavigationItem } from '../../types'
import { TopNav, Props } from './TopNav'

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
      handleHomeClicked={(): void => undefined}
      handleNavigationItemClicked={handleNavigationItemClicked}
      selectedNavigationItem={store.get('selectedNavigationItem')}
    />
  </State>
)

defaultState.story = {
  name: 'default',
}
