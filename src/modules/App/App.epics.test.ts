import { ActionsObservable } from 'redux-observable'
import { RehydrateAction } from 'redux-persist'
import { marbles } from 'rxjs-marbles/jest'
import * as fromActions from './App.actions'
import * as SUT from './App.epics'
import { AppActions, InitAppAction } from './types'

describe('App Epics', () => {
  describe('startInitAppEpic', () => {
    it(
      'should return an initApp action',
      marbles((m) => {
        // given ... we have an initApp action

        const values: any = {
          a: {
            type: AppActions.PersistRehydrate,
          },
          b: fromActions.initApp(),
        }

        const action$ = new ActionsObservable<RehydrateAction>(
          m.cold('---a', values),
        )
        const expected = '---b'

        // when ... the initAppEpic Runs
        const destination$ = SUT.startInitAppEpic$(action$)

        // then
        // ... the epic should return an initAppAction action
        m.expect(destination$).toBeObservable(expected, values)
      }),
    )
  })

  describe('initAppEpic', () => {
    it(
      'should initialize and return a initAppSuccess action',
      marbles((m) => {
        // given ... we have an initApp action

        const values: any = {
          a: fromActions.initApp(),
          b: fromActions.initAppSuccess(),
        }
        const action$ = new ActionsObservable<InitAppAction>(
          m.cold('---a', values),
        )
        const expected = '---b'

        // when ... the initAppEpic Runs
        const destination$ = SUT.initAppEpic$(action$)

        // then
        // ... the epic should return a success action
        m.expect(destination$).toBeObservable(expected, values)
      }),
    )
  })
})
