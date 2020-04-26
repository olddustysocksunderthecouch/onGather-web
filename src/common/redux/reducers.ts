import { History } from 'history'
import firebase from 'react-redux-firebase/lib/reducer'
import { combineReducers, Reducer } from 'redux'
import firestore from 'redux-firestore/lib/reducer'
import { reducer as appReducer } from '../../modules/App'
import { reducer as browseTemplatesReducer } from '../../modules/BrowseTemplates'
import { reducer as userTemplatesReducer } from '../../modules/UserTemplates'
import { createRoutingReducer } from '../routing'
import { RootState } from './types'

/*
  NB: be sure to add relevant reducer keys to store whitelist
  if they need to be persisted to local storage
*/

const createRootReducer = (history: History): Reducer<RootState> =>
  combineReducers({
    router: createRoutingReducer(history),
    app: appReducer,
    userTemplates: userTemplatesReducer,
    browseTemplates: browseTemplatesReducer,
    firebase,
    firestore,
  })

export default createRootReducer
