import * as SUT from './TopNav.actions'
import { TopNavActions } from './types'

describe('TopNav Actions', () => {
  describe('navigateToSearch', () => {
    it('should return an action of type TopNavActions.NavigateToSearch', () => {
      // when ... we call the navigateToSearch action creator
      const action = SUT.navigateToSearch()

      // then we should expect it to create an action with the correct type
      expect(action.type).toEqual(TopNavActions.NavigateToSearch)
    })
  })
  describe('navigateToProfile', () => {
    it('should return an action of type TopNavActions.NavigateToProfile', () => {
      // when ... we call the navigateToProfile action creator
      const action = SUT.navigateToProfile()

      // then we should expect it to create an action with the correct type
      expect(action.type).toEqual(TopNavActions.NavigateToProfile)
    })
  })
})
