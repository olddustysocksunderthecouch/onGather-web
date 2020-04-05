import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { create } from 'react-test-renderer'
import { NavigationItem } from '../../types'
import { TopNavLayout } from './TopNavLayout'

describe('Onboarding Component', () => {
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
      <TopNavLayout
        handleNavigationItemClicked={(): void => undefined}
        selectedNavigationItem={NavigationItem.Create}
        handleHomeClicked={(): void => undefined}
      />,
    )
    expect(instance.root.type).toBe(TopNavLayout)
  })

  it('calls the handleNavigationItemClicked handler when each navigation item is clicked', () => {
    // given ... we have an TopNavLayout component
    // ... we have a handleNavigationItemClicked function
    const handleNavigationItemClicked = jest.fn()
    const { getByTestId } = render(
      <TopNavLayout
        handleHomeClicked={(): void => undefined}
        handleNavigationItemClicked={handleNavigationItemClicked}
        selectedNavigationItem={NavigationItem.Create}
      />,
    )
    fireEvent.click(getByTestId('searchIconContainer'))
    fireEvent.click(getByTestId('profileIconContainer'))
    // then ... the handleNavigationItemClicked handler is called for each icon container
    expect(handleNavigationItemClicked).toHaveBeenCalledTimes(2)
  })
})
