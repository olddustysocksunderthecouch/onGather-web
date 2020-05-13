import { render } from '@testing-library/react'
import React from 'react'
import { SearchBar } from './SearchBar'

describe('SearchBar Component', () => {
  it('renders correctly', () => {
    // when ... we create the component
    const { getByTestId } = render(
      <SearchBar
        placeholderText={'placeholderText'}
        handleSearchTermChanged={(): void => undefined}
      />,
    )
    // ... then it should render correctly
    expect(getByTestId('searchBarContainer')).toBeDefined()
  })

  it('has a placeholder prop which gets set to the input', () => {
    // when ... we create the component then it should render correctly
    // ... we have a PlaceholderText prop
    const placeholderText = 'placeholderText'
    const { getByPlaceholderText } = render(
      <SearchBar
        placeholderText={placeholderText}
        handleSearchTermChanged={(): void => undefined}
      />,
    )
    // ... then it should be set as expected inside the search bar
    expect(getByPlaceholderText(placeholderText)).toBeDefined()
  })

  it('sets the initial value of the input on mount when it is supplier', () => {
    // given ... we have an initial value to supply to our search bar
    // when ...  we render the component
    const { getByTestId } = render(
      <SearchBar
        placeholderText={'none'}
        initialValue={'a value'}
        handleSearchTermChanged={(): void => undefined}
      />,
    )

    // then ... it should set the input value to this value
    const input: HTMLInputElement = getByTestId(
      'searchBarInput',
    ) as HTMLInputElement
    expect(input.value).toEqual('a value')
  })
})
