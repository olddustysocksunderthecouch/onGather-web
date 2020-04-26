import { State, Store } from '@sambego/storybook-state'
import React from 'react'
import { NavigationItem, TopNavType } from '../../types'
import { Props, TopNavLayout } from './TopNavLayout'

export default {
  title: 'Elements/TopNavLayout',
  component: TopNavLayout,
}

const store = new Store({
  selectedNavigationItem: NavigationItem.Create,
})

const handleNavigationItemClicked = (
  selectedNavigationItem: NavigationItem,
): void => store.set({ selectedNavigationItem })

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <State store={store}>
    <TopNavLayout
      authIsRequired={false}
      isAuthenticated={false}
      topNavType={TopNavType.CreateTemplate}
      handleHomeClicked={(): void => undefined}
      handleNavigationItemClicked={handleNavigationItemClicked}
      selectedNavigationItem={store.get('selectedNavigationItem')}
    >
      <h1>Children</h1>
      <p>Child 1</p>
      <p>Child 2</p>
      <p>Child 3</p>
      <p>Child 4</p>
      <p>Child 5</p>
      <p>Child 6</p>
      <p>Child 7</p>
      <p>Child 8</p>
      <p>Child 9</p>
      <p>Child 10</p>
      <p>Child 11</p>
      <p>Child 12</p>
      <p>Child 13</p>
      <p>Child 14</p>
      <p>Child 15</p>
      <p>Child 16</p>
      <p>Child 17</p>
      <p>Child 18</p>
    </TopNavLayout>
  </State>
)

defaultState.story = {
  name: 'default',
}

export const authIsRequiredState = (): React.FunctionComponentElement<
  Props
> => (
  <State store={store}>
    <TopNavLayout
      authIsRequired={true}
      isAuthenticated={false}
      topNavType={TopNavType.CreateTemplate}
      handleHomeClicked={(): void => undefined}
      handleNavigationItemClicked={handleNavigationItemClicked}
      selectedNavigationItem={store.get('selectedNavigationItem')}
    >
      <h1>Children</h1>
      <p>Child 1</p>
      <p>Child 2</p>
      <p>Child 3</p>
      <p>Child 4</p>
      <p>Child 5</p>
      <p>Child 6</p>
      <p>Child 7</p>
      <p>Child 8</p>
      <p>Child 9</p>
      <p>Child 10</p>
      <p>Child 11</p>
      <p>Child 12</p>
      <p>Child 13</p>
      <p>Child 14</p>
      <p>Child 15</p>
      <p>Child 16</p>
      <p>Child 17</p>
      <p>Child 18</p>
    </TopNavLayout>
  </State>
)

authIsRequiredState.story = {
  name: 'auth is required',
}
