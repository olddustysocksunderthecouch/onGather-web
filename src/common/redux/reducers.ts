import { History } from 'history'
import { combineReducers, Reducer } from 'redux'
import { reducer as appReducer } from '../../modules/App'
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
  })

export default createRootReducer
