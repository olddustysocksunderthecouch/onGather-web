// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import {
  UserTemplatesActionTypes,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  UserTemplatesActions,
} from './types'
import {
  publishTemplateFailure,
  publishTemplateSuccess,
  saveDraftTemplateFailure,
  saveDraftTemplateSuccess,
} from './UserTemplates.actions'

export const saveDraftTemplateEpic$ = (
  action$: ActionsObservable<UserTemplatesActionTypes>,
  state$: StateObservable<RootState>,
): Observable<
  SaveDraftTemplateSuccessAction | SaveDraftTemplateFailureAction
> =>
  action$.pipe(
    ofType<UserTemplatesActionTypes>(UserTemplatesActions.SaveDraftTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('templates-createUpdate')({
          ...state.createTemplate.templateEditor,
          status: 'draft',
        }),
      ).pipe(
        flatMap(
          (): Observable<SaveDraftTemplateSuccessAction> =>
            of(saveDraftTemplateSuccess()),
        ),
        catchError(
          (error: Error): Observable<SaveDraftTemplateFailureAction> =>
            of(saveDraftTemplateFailure(error.message)),
        ),
      ),
    ),
  )

export const publishTemplateEpic$ = (
  action$: ActionsObservable<UserTemplatesActionTypes>,
  state$: StateObservable<RootState>,
): Observable<PublishTemplateSuccessAction | PublishTemplateFailureAction> =>
  action$.pipe(
    ofType<UserTemplatesActionTypes>(UserTemplatesActions.PublishTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('templates-createUpdate')({
          ...state.createTemplate.templateEditor,
          status: 'publish',
        }),
      ).pipe(
        flatMap(
          (): Observable<PublishTemplateSuccessAction> =>
            of(publishTemplateSuccess()),
        ),
        catchError(
          (error: Error): Observable<PublishTemplateFailureAction> =>
            of(publishTemplateFailure(error.message)),
        ),
      ),
    ),
  )
