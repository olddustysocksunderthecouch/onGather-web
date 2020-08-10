import firebase from 'firebase/app'
import 'firebase/functions'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import {
  updateGatheringFailure,
  updateGatheringSuccess,
} from './Gatherings.actions'
import {
  GatheringsActions,
  UpdateGatheringAction,
  UpdateGatheringFailureAction,
  UpdateGatheringSuccessAction,
} from './types'

export const updateGatheringEpic$ = (
  action$: ActionsObservable<UpdateGatheringAction>,
  state$: StateObservable<RootState>,
): Observable<UpdateGatheringSuccessAction | UpdateGatheringFailureAction> =>
  action$.pipe(
    ofType<UpdateGatheringAction>(GatheringsActions.UpdateGathering),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('gatherings-updateGathering')(
          action.payload.gathering,
        ),
      ).pipe(
        flatMap(
          (): Observable<UpdateGatheringSuccessAction> => {
            return of(updateGatheringSuccess())
          },
        ),
        catchError(
          (error: Error): Observable<UpdateGatheringFailureAction> =>
            of(updateGatheringFailure(error.message)),
        ),
      ),
    ),
  )
