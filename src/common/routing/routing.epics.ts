import { CallHistoryMethodAction, push } from 'connected-react-router'
import * as R from 'ramda'
import { Action } from 'redux'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { Observable } from 'rxjs'
import { delay, filter, map, withLatestFrom } from 'rxjs/operators'
import { onboarded } from '../../modules/App/App.actions'
import {
  AppActions,
  AppActionTypes,
  OnboardedAction,
  StartedOnboardingAction,
} from '../../modules/App/types'
import { RootState } from '../redux/types'
import { actionRouteMap } from './routes'

export const routingEpic = (
  action$: ActionsObservable<Action>,
): Observable<CallHistoryMethodAction<[string, any?]>> =>
  action$.pipe(
    map((action) => action.type),
    filter((actionType: string) =>
      Object.prototype.hasOwnProperty.call(actionRouteMap, actionType),
    ),
    map((actionType: string): string => R.prop(actionType, actionRouteMap)),
    map((route: string) => push(route)),
  )

export const initializeRoutingEpic = (
  action$: ActionsObservable<AppActionTypes>,
  state$: StateObservable<RootState>,
): Observable<StartedOnboardingAction | OnboardedAction> =>
  action$.pipe(
    ofType<AppActionTypes>(AppActions.InitAppSuccess),
    delay(0),
    withLatestFrom(state$),
    map(([action, state]) => onboarded()),
  )
