import { combineEpics } from 'redux-observable'
import { epics as appEpics } from '../../modules/App'
import { epics as routingEpics } from '../routing'

const epics: any = [...Object.values(routingEpics), ...Object.values(appEpics)]

const rootEpic = combineEpics(...epics)

export default rootEpic
