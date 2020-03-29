import * as fromActions from './App.actions'
import * as SUT from './App.reducer'
import { AppState } from './types'

let initialState: AppState

describe('App Reducer', () => {
  beforeEach(() => {
    initialState = SUT.initialState
  })

  describe('InitApp Action', () => {
    it('should return a new copy of state, set state.loading to true and state.loaded to false', () => {
      // given ... we create an initApp action
      const action = fromActions.initApp()

      // when ... we run the reducer and pass it our initialState and this action
      const state = SUT.reducer(initialState, action)

      // then
      // ... should set the loading value of state to true
      expect(state.loading).toBe(true)
      // ... should set the loaded value of state to false
      expect(state.loaded).toBe(false)

      // ... should not the affect the rest of the state
      state.loading = initialState.loading
      state.loaded = initialState.loaded
      expect(state).toEqual(initialState)
    })
  })
  describe('InitAppSuccess Action', () => {
    it('should return a new copy of state, set state.loading to true and state.loaded to false', () => {
      // given ... we create an initAppSuccess action
      const action = fromActions.initAppSuccess()

      // when ... we run the reducer and pass it our initialState and this action
      const state = SUT.reducer(initialState, action)

      // then
      // ... should set the loading value of state to false
      expect(state.loading).toBe(false)
      // ... should set the loaded value of state to true
      expect(state.loaded).toBe(true)

      // ... should not the affect the rest of the state
      state.loading = initialState.loading
      state.loaded = initialState.loading
      expect(state).toEqual(initialState)
    })
  })
  describe('InitAppFailure Action', () => {
    it('should return a new copy of state, set state.loading to true and state.loaded to false', () => {
      // given ... we create an initAppFailure action
      const action = fromActions.initAppFailure()

      // when ... we run the reducer and pass it our initialState and this action
      const state = SUT.reducer(initialState, action)

      // then
      // ... should set the loading value of state to false
      expect(state.loading).toBe(false)
      // ... should set the loaded value of state to true
      expect(state.loaded).toBe(false)

      // ... should not the affect the rest of the state
      state.loading = initialState.loading
      state.loaded = initialState.loading
      expect(state).toEqual(initialState)
    })
  })
  describe('Onboarded Action', () => {
    it('should return a new copy of state, set state.onbaorded to true', () => {
      // given ... we create an onboarded action
      const action = fromActions.onboarded()

      // when ... we run the reducer and pass it our initialState and this action
      const state = SUT.reducer(initialState, action)

      // then
      // ... should set the loading value of state to false
      expect(state.onboarded).toBe(true)

      // ... should not the affect the rest of the state
      state.onboarded = initialState.onboarded
      expect(state).toEqual(initialState)
    })
  })
})
