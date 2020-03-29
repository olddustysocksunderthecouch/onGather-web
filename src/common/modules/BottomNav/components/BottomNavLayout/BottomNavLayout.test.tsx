import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { create } from 'react-test-renderer'
import { NavigationItem } from '../../types'
import { BottomNavLayout } from './BottomNavLayout'

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
      <BottomNavLayout
        handleNavigationItemClicked={(): void => undefined}
        selectedNavigationItem={NavigationItem.Search}
      />,
    )
    expect(instance.root.type).toBe(BottomNavLayout)
  })

  it('calls the handleNavigationItemClicked handler when each navigation item is clicked', () => {
    // given ... we have an BottomNavLayout component
    // ... we have a handleNavigationItemClicked function
    const handleNavigationItemClicked = jest.fn()
    const { getByTestId } = render(
      <BottomNavLayout
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
