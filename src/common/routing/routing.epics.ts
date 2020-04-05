import { CallHistoryMethodAction, push } from 'connected-react-router'
import * as R from 'ramda'
import { Action } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
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
