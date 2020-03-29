import * as SUT from './BottomNav.actions'
import { BottomNavActions } from './types'

describe('BottomNav Actions', () => {
  describe('navigateToSearch', () => {
    it('should return an action of type BottomNavActions.NavigateToSearch', () => {
      // when ... we call the navigateToSearch action creator
      const action = SUT.navigateToSearch()

      // then we should expect it to create an action with the correct type
      expect(action.type).toEqual(BottomNavActions.NavigateToSearch)
    })
  })
  describe('navigateToProfile', () => {
    it('should return an action of type BottomNavActions.NavigateToProfile', () => {
      // when ... we call the navigateToProfile action creator
      const action = SUT.navigateToProfile()

      // then we should expect it to create an action with the correct type
      expect(action.type).toEqual(BottomNavActions.NavigateToProfile)
    })
  })
})
