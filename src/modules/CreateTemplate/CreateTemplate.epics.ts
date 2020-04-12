// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import {
  publishTemplateFailure,
  publishTemplateSuccess,
  saveDraftTemplateFailure,
  saveDraftTemplateSuccess,
} from './CreateTemplate.actions'
import {
  CreateTemplateActions,
  CreateTemplateActionTypes,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
} from './types'

export const saveDraftTemplateEpic$ = (
  action$: ActionsObservable<CreateTemplateActionTypes>,
  state$: StateObservable<RootState>,
): Observable<
  SaveDraftTemplateSuccessAction | SaveDraftTemplateFailureAction
> =>
  action$.pipe(
    ofType<CreateTemplateActionTypes>(CreateTemplateActions.SaveDraftTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('templates-createUpdate')({
          ...state.createTemplate.templateEditor,
          status: 'draft',
        }),
      ).pipe(
        flatMap(
          (result: any): Observable<SaveDraftTemplateSuccessAction> => {
            return of(saveDraftTemplateSuccess())
          },
        ),
        catchError(
          (error: Error): Observable<SaveDraftTemplateFailureAction> =>
            of(saveDraftTemplateFailure(error.message)),
        ),
      ),
    ),
  )

export const publishTemplateEpic$ = (
  action$: ActionsObservable<CreateTemplateActionTypes>,
  state$: StateObservable<RootState>,
): Observable<PublishTemplateSuccessAction | PublishTemplateFailureAction> =>
  action$.pipe(
    ofType<CreateTemplateActionTypes>(CreateTemplateActions.PublishTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('templates-createUpdate')({
          ...state.createTemplate.templateEditor,
          status: 'publish',
        }),
      ).pipe(
        flatMap(
          (result: any): Observable<PublishTemplateSuccessAction> => {
            return of(publishTemplateSuccess())
          },
        ),
        catchError(
          (error: Error): Observable<PublishTemplateFailureAction> =>
            of(publishTemplateFailure(error.message)),
        ),
      ),
    ),
  )
