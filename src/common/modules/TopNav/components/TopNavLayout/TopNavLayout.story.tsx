import { State, Store } from '@sambego/storybook-state'
import React from 'react'
import { NavigationItem } from '../../types'
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
      displayName="Adrian Bunge"
      profilePic="https://lh3.googleusercontent.com/a-/AOh14GgKxMbiOlVx7GCEFpCqLZsF6udEzBDOZiMqKyw5"
      authIsRequired={false}
      isAuthenticated={false}
      topNavButton={{ text: 'Templates', path: '/templates' }}
      handleHomeClicked={(): void => undefined}
      handleNavigationItemClicked={handleNavigationItemClicked}
      handleContinueWithClicked={(): void => undefined}
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
      displayName="Adrian Bunge"
      profilePic="https://lh3.googleusercontent.com/a-/AOh14GgKxMbiOlVx7GCEFpCqLZsF6udEzBDOZiMqKyw5"
      authIsRequired={true}
      isAuthenticated={false}
      topNavButton={{ text: 'Templates', path: '/templates' }}
      handleHomeClicked={(): void => undefined}
      handleContinueWithClicked={(): void => undefined}
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

export const authIsLoadingState = (): React.FunctionComponentElement<Props> => (
  <State store={store}>
    <TopNavLayout
      displayName="Adrian Bunge"
      profilePic="https://lh3.googleusercontent.com/a-/AOh14GgKxMbiOlVx7GCEFpCqLZsF6udEzBDOZiMqKyw5"
      authIsRequired={true}
      isAuthenticationLoading={true}
      isAuthenticated={false}
      topNavButton={{ text: 'Templates', path: '/templates' }}
      handleHomeClicked={(): void => undefined}
      handleContinueWithClicked={(): void => undefined}
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

authIsLoadingState.story = {
  name: 'auth is loading',
}
