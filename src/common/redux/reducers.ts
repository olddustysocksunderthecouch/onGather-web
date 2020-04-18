import { History } from 'history'
import { combineReducers, Reducer } from 'redux'
import { reducer as appReducer } from '../../modules/App'
import { reducer as createTemplateReducer } from '../../modules/UserTemplates'
import { createRoutingReducer } from '../routing'
import { RootState } from './types'
import firebase from 'react-redux-firebase/lib/reducer'
import firestore from 'redux-firestore/lib/reducer'

/*
  NB: be sure to add relevant reducer keys to store whitelist
  if they need to be persisted to local storage
*/

const createRootReducer = (history: History): Reducer<RootState> =>
  combineReducers({
    router: createRoutingReducer(history),
    app: appReducer,
    createTemplate: createTemplateReducer,
    firebase,
    firestore,
  })

export default createRootReducer
