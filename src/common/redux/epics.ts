import { combineEpics } from 'redux-observable'
import { epics as appEpics } from '../../modules/App'
import { epics as authEpics } from '../../modules/Auth'
import { epics as createTemplateEpics } from '../../modules/UserTemplates'
import { epics as viewUseTemplateEpics } from '../../modules/ViewUtilizeTemplate'

import { epics as routingEpics } from '../routing'

const epics: any = [
  ...Object.values(routingEpics),
  ...Object.values(appEpics),
  ...Object.values(authEpics),
  ...Object.values(createTemplateEpics),
  ...Object.values(viewUseTemplateEpics),
]

const rootEpic = combineEpics(...epics)

export default rootEpic
