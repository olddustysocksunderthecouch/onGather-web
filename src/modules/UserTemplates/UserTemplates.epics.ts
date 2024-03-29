import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import {
  catchError,
  flatMap,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import { TemplateFirestoreResult } from '../../common/types'
import {
  EditExistingTemplateAction,
  ImageSearchResult,
  PublishTemplateAction,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  SearchForImagesAction,
  SearchForImagesFailureAction,
  SearchForImagesSuccessAction,
  SetExistingTemplateEditorDataAction,
  TriggerUnsplashImageDownloadAction,
  TriggerUnsplashImageDownloadFailureAction,
  TriggerUnsplashImageDownloadSuccessAction,
  UploadImageAction,
  UploadImageFailureAction,
  UploadImageSuccessAction,
  UserTemplatesActions,
} from './types'
import {
  publishTemplateFailure,
  publishTemplateSuccess,
  saveDraftTemplateFailure,
  saveDraftTemplateSuccess,
  searchForImagesFailure,
  searchForImagesSuccess,
  setExistingTemplateEditorData,
  triggerUnsplashImageDownloadFailure,
  triggerUnsplashImageDownloadSuccess,
  uploadImageFailure,
  uploadImageSuccess,
} from './UserTemplates.actions'

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
        firebase.functions().httpsCallable('templates-createUpdateTemplate')({
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
        firebase.functions().httpsCallable('templates-createUpdateTemplate')({
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

export const searchForImagesEpic$ = (
  action$: ActionsObservable<SearchForImagesAction>,
  state$: StateObservable<RootState>,
): Observable<SearchForImagesSuccessAction | SearchForImagesFailureAction> =>
  action$.pipe(
    ofType<SearchForImagesAction>(UserTemplatesActions.SearchForImages),
    withLatestFrom(state$),
    switchMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('unsplash-searchImages')({
          searchTerm: action.payload.searchTerm,
          page: action.payload.page,
        }),
      ).pipe(
        flatMap(
          (result: any): Observable<SearchForImagesSuccessAction> => {
            const imageData = result.data.body.imageData as any[]
            const formattedResults: ImageSearchResult[] = imageData.reduce(
              (
                accumulator: ImageSearchResult[],
                currentValue: any,
              ): ImageSearchResult[] => {
                accumulator.push({
                  images: currentValue.urls,
                  attributionName: currentValue.user.name,
                  attributionLink: `${currentValue.user.links.html}?utm_source=onGather&utm_medium=referral`,
                  altDescription: currentValue.alt_description,
                  downloadLink: currentValue.links.download_location,
                })
                return accumulator
              },
              [],
            )

            return of(
              searchForImagesSuccess(
                result.data.body.searchTerm,
                formattedResults,
                result.data.body.totalImagesAvailable,
              ),
            )
          },
        ),
        catchError(
          (error: Error): Observable<SearchForImagesFailureAction> =>
            of(searchForImagesFailure(error.message)),
        ),
      ),
    ),
  )

export const triggerUnsplashImageDownloadEpic$ = (
  action$: ActionsObservable<TriggerUnsplashImageDownloadAction>,
  state$: StateObservable<RootState>,
): Observable<
  | TriggerUnsplashImageDownloadSuccessAction
  | TriggerUnsplashImageDownloadFailureAction
> =>
  action$.pipe(
    ofType<TriggerUnsplashImageDownloadAction>(
      UserTemplatesActions.TriggerUnsplashImageDownload,
    ),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('unsplash-triggerImageDownload')({
          downloadLink: action.payload.downloadLink,
        }),
      ).pipe(
        flatMap(
          (): Observable<TriggerUnsplashImageDownloadSuccessAction> => {
            return of(triggerUnsplashImageDownloadSuccess())
          },
        ),
        catchError(
          (
            error: Error,
          ): Observable<TriggerUnsplashImageDownloadFailureAction> =>
            of(triggerUnsplashImageDownloadFailure(error.message)),
        ),
      ),
    ),
  )
