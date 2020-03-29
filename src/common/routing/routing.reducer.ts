import {
  connectRouter,
  RouterState,
  LocationChangeAction,
} from 'connected-react-router'
import { History } from 'history'
import { Reducer } from 'redux'

export const createRoutingReducer = (
  history: History,
): Reducer<RouterState, LocationChangeAction> => connectRouter(history)
