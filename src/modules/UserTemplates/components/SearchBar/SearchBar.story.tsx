import React from 'react'
import { SearchBar } from './SearchBar'

export default {
  title: 'Components/UserTemplates/SearchBar',
  component: SearchBar,
}

const handleSearchTermChanged = (value: string): void => {
  console.log(`value changed: it is ${value}`)
}

export const defaultState = (): React.FunctionComponentElement<void> => (
  <SearchBar
    placeholderText={'Placeholder Text'}
    handleSearchTermChanged={handleSearchTermChanged}
  />
)

defaultState.story = {
  name: 'default',
}

export const initialValue = (): React.FunctionComponentElement<void> => (
  <SearchBar
    placeholderText={'Placeholder Text'}
    initialValue={'set an initial value'}
    handleSearchTermChanged={handleSearchTermChanged}
  />
)

initialValue.story = {
  name: 'set an initial value',
}
