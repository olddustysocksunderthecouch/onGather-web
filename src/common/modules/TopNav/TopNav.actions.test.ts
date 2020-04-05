import * as SUT from './TopNav.actions'
import { TopNavActions } from './types'

describe('TopNav Actions', () => {
  describe('navigateToCreateTemplate', () => {
    it('should return an action of type TopNavActions.NavigateToCreateTemplate', () => {
      const action = SUT.navigateToCreateTemplate()

      // then we should expect it to create an action with the correct type
      expect(action.type).toEqual(TopNavActions.NavigateToCreateTemplate)
    })
  })
})
