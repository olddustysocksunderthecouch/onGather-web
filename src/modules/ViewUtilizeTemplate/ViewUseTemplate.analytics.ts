import combineEvents from '@redux-beacon/combine-events'
import { trackEvent, trackException } from '@redux-beacon/google-analytics'
import { ViewUseTemplateActions } from './types'

export default {
  [ViewUseTemplateActions.CreateGathering]: combineEvents(
    trackEvent((action) => ({
      category: 'ViewUseTemplate',
      action: 'CreateGathering',
      label: `${action.payload.gathering.title}, ${action.payload.gathering.templateId}, `,
    })),
    trackEvent((action) => ({
      category: 'ViewUseTemplate',
      action: 'CreateGathering - Participant Count',
      label: action.payload.gathering.inviteeEmails
        ? action.payload.gathering.inviteeEmails.length.toString()
        : '',
    })),
  ),
  [ViewUseTemplateActions.CreateGatheringFailure]: trackException((action) => ({
    exDescription: `ViewUseTemplate - CreateGatheringFailure - ${action.payload.message}`,
    exFatal: true,
  })),
  [ViewUseTemplateActions.UtilizeThisTemplate]: trackEvent((action) => ({
    category: 'ViewUseTemplate',
    action: 'UtilizeThisTemplate',
    label: ` ${action.payload.title}, ${action.payload.templateId}`,
  })),
}
