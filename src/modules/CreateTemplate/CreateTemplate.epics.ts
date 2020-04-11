// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase'
import { ActionsObservable, ofType } from 'redux-observable'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { saveDraftTemplateSuccess } from './CreateTemplate.actions'
import {
  CreateTemplateActions,
  CreateTemplateActionTypes,
  SaveDraftTemplateSuccessAction,
  Template,
} from './types'

const template: Template = {
  title: 'this is my title',
  status: 'draft',
  category: 'Book Club',
}

export const saveDraftTemplateEpic$ = (
  action$: ActionsObservable<CreateTemplateActionTypes>,
): Observable<SaveDraftTemplateSuccessAction> =>
  action$.pipe(
    ofType<CreateTemplateActionTypes>(CreateTemplateActions.SaveDraftTemplate),
    map(() => {
      const createTemplates = firebase
        .functions()
        .httpsCallable('templates-createTemplate')

      createTemplates(template)
        .then(function (result) {
          // Read result of the Cloud Function.
          console.log('holllllaaaaaa', result)
          // ...
        })
        .catch(function (error) {
          // Getting the Error details.
          const code = error.code
          const message = error.message
          const details = error.details
          console.log('failure', code, message, details)
          // ...
        })

      return saveDraftTemplateSuccess()
    }),
  )
