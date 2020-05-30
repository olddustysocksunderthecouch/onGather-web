import { combineEpics } from 'redux-observable'
import { epics as appEpics } from '../../modules/App'
import { epics as createTemplateEpics } from '../../modules/UserTemplates'
import { epics as viewUseTemplateEpics } from '../../modules/ViewUseTemplate'

import { epics as routingEpics } from '../routing'

const epics: any = [
  ...Object.values(routingEpics),
  ...Object.values(appEpics),
  ...Object.values(createTemplateEpics),
  ...Object.values(viewUseTemplateEpics),
]

const rootEpic = combineEpics(...epics)

export default rootEpic
