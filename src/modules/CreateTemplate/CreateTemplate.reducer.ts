import {
  CreateTemplateActions,
  CreateTemplateActionTypes,
  CreateTemplateState,
} from './types'

export const initialState: CreateTemplateState = {
  templateEditor: {
    templateId: '',
    category: '',
    title: '',
    shortDescription: '',
    mainAimsOutcomes: '',
    suggestedDuration: '',
    imageUrl: '',
    hostInstructions: '',
    invitationDescription: '',
  },
}

export function reducer(
  state = initialState,
  action: CreateTemplateActionTypes,
): CreateTemplateState {
  switch (action.type) {
    case CreateTemplateActions.SetEditorTemplateData: {
      return {
        ...state,
        templateEditor: {
          ...action.payload.template,
        },
      }
    }
  }
  return state
}
