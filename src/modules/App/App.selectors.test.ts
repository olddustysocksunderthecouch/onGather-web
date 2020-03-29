import * as SUT from './App.selectors'

describe('App Selectors', () => {
  let state: any

  beforeEach(() => {
    state = {
      app: {
        loading: true,
        loaded: false,
      },
    }
  })

  describe('selectApp', () => {
    it('should return the app property of state', () => {
      // given ... we have some state
      // when ... we call the selector
      const result = SUT.selectApp(state)

      // ... should return the slice of state as expected
      expect(result).toEqual(state.app)
    })
  })
  describe('selectAppLoading', () => {
    it('should return the loading property of the app state', () => {
      // given ... we have some state
      // when ... we call the selector
      const result = SUT.selectAppLoading(state)

      // ... should return the property as expected
      expect(result).toEqual(true)
    })
  })
  describe('selectAppLoaded', () => {
    it('should return the loading property of the app state', () => {
      // given ... we have some state
      // when ... we call the selector
      const result = SUT.selectAppLoaded(state)

      // ... should return the property as expected
      expect(result).toEqual(false)
    })
  })
})
