// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase'
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

export const saveDraftTemplateEpic$ = (
  action$: ActionsObservable<UtilizeTemplateAction>,
  state$: StateObservable<RootState>,
): Observable<UtilizeTemplateSuccessAction | UtilizeTemplateFailureAction> =>
  action$.pipe(
    ofType<UtilizeTemplateAction>(ViewUseTemplateActions.UtilizeTemplate),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('gatherings-createInDatabase')({
          category: 'Popular',
          title: 'Book Club: Same book',
          shortDescription:
            'A simple book club that gets people reading together and diving into the finer details of a book. Let’s put a character limit on here and see what happens. It’s quite a bit of words that.',
          mainAimsOutcomes: 'Deep Insight | Common Interest | Topic Centred',
          suggestedDuration: '120',
          imageUrls: {
            raw:
              'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
            regular:
              'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
            full:
              'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
            small:
              'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
            thumb:
              'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
          },
          whatYouDo:
            'Since the COVID-19 pandemic, my famous Drag Queen experiences went from sold out to zero guests.',
          howYouDo:
            'Though we’re closing the doors for the next few months until the global situation improves, THE SHOW MUST GO ON!',
          hostInstructions:
            'A simple book club that gets people reading together and diving into the finer details of a book.',
        }),
      ).pipe(
        flatMap(
          (): Observable<UtilizeTemplateSuccessAction> =>
            of(utilizeTemplateSuccess('some id')),
        ),
        catchError(
          (error: Error): Observable<UtilizeTemplateFailureAction> =>
            of(utilizeTemplateFailure(error.message)),
        ),
      ),
    ),
  )
