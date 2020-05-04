// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import {
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  UploadImageAction,
  UploadImageFailureAction,
  UploadImageSuccessAction,
  UserTemplatesActions,
  UserTemplatesActionTypes,
} from './types'
import {
  publishTemplateFailure,
  publishTemplateSuccess,
  saveDraftTemplateFailure,
  saveDraftTemplateSuccess,
  uploadImageFailure,
  uploadImageSuccess,
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
          ...state.userTemplates.templateEditor,
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
          ...state.userTemplates.templateEditor,
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

export const uploadImageEpic$ = (
  action$: ActionsObservable<UploadImageAction>,
  state$: StateObservable<RootState>,
): Observable<UploadImageSuccessAction | UploadImageFailureAction> =>
  action$.pipe(
    ofType<UploadImageAction>(UserTemplatesActions.UploadImage),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase
          .storage()
          .ref()
          .child('mountains.jpg')
          .put(action.payload.file),
      ).pipe(
        flatMap(
          (result: any): Observable<UploadImageSuccessAction> =>
            of(uploadImageSuccess(result)),
        ),
        catchError(
          (error: Error): Observable<UploadImageFailureAction> =>
            of(uploadImageFailure(error.message)),
        ),
      ),
    ),
  )
