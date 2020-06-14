// Firebase App (the core Firebase SDK) is always required and must be listed first
import { functions } from 'firebase'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import {
  UtilizeTemplateAction,
  UtilizeTemplateFailureAction,
  UtilizeTemplateSuccessAction,
  ViewUseTemplateActions,
} from './types'
import {
  utilizeTemplateFailure,
  utilizeTemplateSuccess,
} from './ViewUseTemplate.actions'

export const generateAuthUrlEpic$ = (
  action$: ActionsObservable<UtilizeTemplateAction>,
  state$: StateObservable<RootState>,
): Observable<UtilizeTemplateSuccessAction | UtilizeTemplateFailureAction> =>
  action$.pipe(
    ofType<UtilizeTemplateAction>(ViewUseTemplateActions.UtilizeTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        functions().httpsCallable('gatherings-createGathering')({
          eventName: 'Firebase Event',
          description: 'This is a sample description',
          startTime: '2020-6-01T10:00:00',
          endTime: '2020-6-01T13:00:00',
        }),
      ).pipe(
        flatMap(
          (result: any): Observable<UtilizeTemplateSuccessAction> => {
            return of(utilizeTemplateSuccess(result))
          },
        ),
        catchError(
          (error: Error): Observable<UtilizeTemplateFailureAction> =>
            of(utilizeTemplateFailure(error.message)),
        ),
      ),
    ),
  )
