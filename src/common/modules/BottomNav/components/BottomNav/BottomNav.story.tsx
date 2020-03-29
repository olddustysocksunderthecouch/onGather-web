import { State, Store } from '@sambego/storybook-state'
import React from 'react'
import { NavigationItem } from '../../types'
import { BottomNav, Props } from './BottomNav'

export default {
  title: 'Elements/BottomNav',
  component: BottomNav,
}

const store = new Store({
  selectedNavigationItem: NavigationItem.Profile,
})

const handleNavigationItemClicked = (
  selectedNavigationItem: NavigationItem,
): void => store.set({ selectedNavigationItem })

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <State store={store}>
    <BottomNav
      handleNavigationItemClicked={handleNavigationItemClicked}
      selectedNavigationItem={store.get('selectedNavigationItem')}
    />
  </State>
)

defaultState.story = {
  name: 'default',
}
