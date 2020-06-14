import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { getFirebase } from 'react-redux-firebase'
import {
  AnyAction,
  applyMiddleware,
  createStore,
  PreloadedState,
  StoreEnhancer,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createEpicMiddleware } from 'redux-observable'
import { persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootEpic from './epics'
import createRootReducer from './reducers'
import { ReduxStoreAndPersistor, RootPreloadedState, RootState } from './types'

const reduxPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
}

export const history = createBrowserHistory()

export const configureStoreAndPersistor = (
  preloadedState?: PreloadedState<RootPreloadedState>,
): ReduxStoreAndPersistor => {
  const epicMiddleware = createEpicMiddleware()
  const createdRouterMiddleWare: any = routerMiddleware(history)
  const middlewares = [
    createdRouterMiddleWare,
    epicMiddleware,
    thunk.withExtraArgument(getFirebase),
  ]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers)
  const rootReducer = createRootReducer(history)
  const persistedReducer = persistReducer<RootState, AnyAction>(
    reduxPersistConfig,
    rootReducer,
  )
  const store = createStore(persistedReducer, preloadedState, composedEnhancers)
  const persistor = persistStore(store)

  /* Uncomment the below to purge the store */
  // persistor.purge()
  epicMiddleware.run(rootEpic)
  return { store, persistor }
}

export default configureStoreAndPersistor
