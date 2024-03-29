import firebase from 'firebase/app'
import 'firebase/functions'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import {
  CreateGatheringAction,
  CreateGatheringFailureAction,
  CreateGatheringSuccessAction,
  ViewUseTemplateActions,
} from './types'
import {
  createGatheringFailure,
  createGatheringSuccess,
} from './ViewUseTemplate.actions'

export const createGatheringEpic$ = (
  action$: ActionsObservable<CreateGatheringAction>,
  state$: StateObservable<RootState>,
): Observable<CreateGatheringSuccessAction | CreateGatheringFailureAction> =>
  action$.pipe(
    ofType<CreateGatheringAction>(ViewUseTemplateActions.CreateGathering),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('gatherings-createGathering')(
          action.payload.gathering,
        ),
      ).pipe(
        flatMap(
          (): Observable<CreateGatheringSuccessAction> => {
            return of(createGatheringSuccess())
          },
        ),
        catchError(
          (error: Error): Observable<CreateGatheringFailureAction> =>
            of(createGatheringFailure(error.message)),
        ),
      ),
    ),
  )
