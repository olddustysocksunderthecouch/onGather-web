import { RouterState } from 'connected-react-router'
import { Dispatch } from 'react'
import { Store } from 'redux'
import { Persistor } from 'redux-persist'
import { AppState } from '../../modules/App/types'
import { UserTemplatesState } from '../../modules/UserTemplates/types'

export interface RootState {
  app: AppState
  router: RouterState
  createTemplate: UserTemplatesState
  firebase: any
  firestore: any
}

export interface RootPreloadedState extends RootState {
  _persist: {
    version: number
    rehydrated: boolean
  }
}

export interface ReduxStoreAndPersistor {
  store: Store<RootState>
  persistor: Persistor
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<S> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<S>
}
