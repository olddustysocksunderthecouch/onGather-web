// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, map, withLatestFrom } from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import { TemplateFirestoreResult } from '../../common/types'
import {
  CreateNewTemplateSuccessAction,
  EditExistingTemplateAction,
  PublishTemplateAction,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  SetExistingTemplateEditorDataAction,
  UploadImageAction,
  UploadImageFailureAction,
  UploadImageSuccessAction,
  UserTemplatesActions,
  UserTemplatesActionTypes,
} from './types'
import {
  createNewTemplateSuccess,
  publishTemplateFailure,
  publishTemplateSuccess,
  saveDraftTemplateFailure,
  saveDraftTemplateSuccess,
  setExistingTemplateEditorData,
  uploadImageFailure,
  uploadImageSuccess,
} from './UserTemplates.actions'

export const createNewTemplateEpic$ = (
  action$: ActionsObservable<UserTemplatesActionTypes>,
): Observable<CreateNewTemplateSuccessAction> =>
  action$.pipe(
    ofType<UserTemplatesActionTypes>(UserTemplatesActions.CreateNewTemplate),
    map(() =>
      createNewTemplateSuccess(
        firebase.firestore().collection('templates').doc().id,
      ),
    ),
  )

export const editExistingTemplateEpic$ = (
  action$: ActionsObservable<EditExistingTemplateAction>,
  state$: StateObservable<RootState>,
): Observable<SetExistingTemplateEditorDataAction> =>
  action$.pipe(
    ofType<EditExistingTemplateAction>(
      UserTemplatesActions.EditExistingTemplate,
    ),
    withLatestFrom(state$),
    map(([action, state]) => {
      const templateData =
        action.payload.type === 'userDrafts'
          ? state.firestore.data.userDrafts[action.payload.templateId]
          : state.firestore.data.userPublished[action.payload.templateId]
      return setExistingTemplateEditorData(
        action.payload.templateId,
        templateData as TemplateFirestoreResult,
      )
    }),
  )

export const saveDraftTemplateEpic$ = (
  action$: ActionsObservable<SaveDraftTemplateAction>,
  state$: StateObservable<RootState>,
): Observable<
  SaveDraftTemplateSuccessAction | SaveDraftTemplateFailureAction
> =>
  action$.pipe(
    ofType<SaveDraftTemplateAction>(UserTemplatesActions.SaveDraftTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('templates-createUpdate')({
          ...action.payload.template,
          templateId: state.userTemplates.selectedTemplateId,
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
  action$: ActionsObservable<PublishTemplateAction>,
  state$: StateObservable<RootState>,
): Observable<PublishTemplateSuccessAction | PublishTemplateFailureAction> =>
  action$.pipe(
    ofType<PublishTemplateAction>(UserTemplatesActions.PublishTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('templates-createUpdate')({
          ...action.payload.template,
          templateId: state.userTemplates.selectedTemplateId,
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
          .child(state.userTemplates.selectedTemplateId)
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
