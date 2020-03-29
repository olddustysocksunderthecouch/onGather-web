import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { create } from 'react-test-renderer'
import { NavigationItem } from '../../types'
import { TopNav } from './TopNav'

describe('TopNav Component', () => {
  let container: any = null
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <TopNav
        handleNavigationItemClicked={(): void => undefined}
        selectedNavigationItem={NavigationItem.Search}
      />,
    )
    expect(instance.root.type).toBe(TopNav)
  })

  it('calls the handleNavigationItemClicked handler when each navigation item is clicked', () => {
    // given ... we have an TopNavLayout component
    // ... we have a handleNavigationItemClicked function
    const handleNavigationItemClicked = jest.fn()
    const { getByTestId } = render(
      <TopNav
        handleNavigationItemClicked={handleNavigationItemClicked}
        selectedNavigationItem={NavigationItem.Search}
      />,
    )
    fireEvent.click(getByTestId('searchIconContainer'))
    fireEvent.click(getByTestId('profileIconContainer'))
    // then ... the handleNavigationItemClicked handler is called for each icon container
    expect(handleNavigationItemClicked).toHaveBeenCalledTimes(2)
  })
})
