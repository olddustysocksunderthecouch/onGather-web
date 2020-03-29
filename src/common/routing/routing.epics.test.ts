import { push } from 'connected-react-router'
import parametrize from 'js-parametrize'
import { Action } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { marbles } from 'rxjs-marbles/jest'
import { AppActions } from '../../modules/App/types'
import * as SUT from './routing.epics'

describe('routingEpics', () => {
  describe('routingEpic', () => {
    parametrize(
      [
        [AppActions.Onboarded, '/'],
        [AppActions.StartedOnboarding, '/onboarding'],
      ],
      (actionType: string, expectedRoutePath: string) => {
        it(
          'should map action to route as expected and navigate',
          marbles((m) => {
            const values: any = {
              a: { type: actionType },
              b: push(expectedRoutePath),
            }

            const action$ = new ActionsObservable<Action>(
              m.cold('---a', values),
            )
            const expected = '---b'

            // when ... we handle app routing
            const destination$ = SUT.routingEpic(action$)

            // then ... should map action to route as expected and navigate
            m.expect(destination$).toBeObservable(expected, values)
          }),
        )
      },
    )
  })
})
