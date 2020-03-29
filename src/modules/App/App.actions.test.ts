import * as SUT from './App.actions'
import { AppActions } from './types'

describe('App Actions', () => {
  describe('initApp', () => {
    it('should return an action of type AppActions.InitApp', () => {
      // when ... we call the initApp action creator
      const action = SUT.initApp()

      // then we should expect it to create an action with the correct type
      expect(action.type).toEqual(AppActions.InitApp)
    })
  })

  describe('initAppSuccess', () => {
    it('should return an action of type AppActions.InitAppSuccess', () => {
      // when ... we call the initAppSuccess action creator
      const action = SUT.initAppSuccess()

      // then ... we should expect it to create an action with the correct type
      expect(action.type).toEqual(AppActions.InitAppSuccess)
    })
  })

  describe('initAppFailure', () => {
    it('should return an action of type AppActions.InitAppSuccess', () => {
      // when ... we call the initAppFailure action creator
      const action = SUT.initAppFailure()

      // then ... we should expect it to create an action with the correct type
      expect(action.type).toEqual(AppActions.InitAppFailure)
    })
  })

  describe('startedOnboarding', () => {
    it('should return an action of type AppActions.StartedOnboarding', () => {
      // when ... we call the startedOnboarding action creator
      const action = SUT.startedOnboarding()

      // then we should expect it to create an action with the correct type
      expect(action.type).toEqual(AppActions.StartedOnboarding)
    })
  })

  describe('onboarded', () => {
    it('should return an action of type AppActions.Onboarded', () => {
      // when ... we call the onboarded action creator
      const action = SUT.onboarded()

      // then ... we should expect it to create an action with the correct type
      expect(action.type).toEqual(AppActions.Onboarded)
    })
  })
})
