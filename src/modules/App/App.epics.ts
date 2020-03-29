import { CallHistoryMethodAction } from 'connected-react-router'
import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { RehydrateAction } from 'redux-persist'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { initApp, initAppSuccess } from './App.actions'
import { AppActions, AppActionTypes, InitAppSuccessAction } from './types'

// ---------------------------------
// init app
// ---------------------------------

export const startInitAppEpic$ = (
  action$: ActionsObservable<RehydrateAction>,
): Observable<AnyAction> =>
  action$.pipe(
    ofType<RehydrateAction>(AppActions.PersistRehydrate),
    map(() => initApp()),
  )

export const initAppEpic$ = (
  action$: ActionsObservable<AppActionTypes>,
): Observable<InitAppSuccessAction | CallHistoryMethodAction<[string, any?]>> =>
  action$.pipe(
    ofType<AppActionTypes>(AppActions.InitApp),
    map(() => initAppSuccess()),
  )
