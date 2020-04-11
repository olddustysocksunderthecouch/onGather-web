import { combineEpics } from 'redux-observable'
import { epics as appEpics } from '../../modules/App'
import { epics as createTemplateEpics } from '../../modules/CreateTemplate'
import { epics as routingEpics } from '../routing'

const epics: any = [
  ...Object.values(routingEpics),
  ...Object.values(appEpics),
  ...Object.values(createTemplateEpics),
]

const rootEpic = combineEpics(...epics)

export default rootEpic
