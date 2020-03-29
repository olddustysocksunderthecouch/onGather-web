import * as SUT from './TopNav.selectors'
import { NavigationItem } from './types'

describe('Bottom Nav Selectors', () => {
  let state: any

  beforeEach(() => {
    state = {
      router: {
        location: {
          pathname: '/search',
        },
      },
    }
  })

  describe('selectRouter', () => {
    it('should return the router property of state', () => {
      // given ... we have some state
      // when ... we call the selector
      const result = SUT.selectRouter(state)

      // ... should return the slice of state as expected
      expect(result).toEqual(state.router)
    })
  })

  describe('selectActiveNavigationItem', () => {
    it('should return the router property of state', () => {
      // given ... we have some state
      // when ... we call the selector
      const result = SUT.selectActiveNavigationItem(state)

      // ... should return the slice of state as expected
      expect(result).toEqual(NavigationItem.Search)
    })
  })
})
