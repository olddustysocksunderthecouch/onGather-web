import {
  CreateTemplateActions,
  CreateTemplateActionTypes,
  CreateTemplateState,
} from './types'

export const initialState: CreateTemplateState = {
  templateEditor: {
    loading: '',
    error: '',
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
          loading: state.templateEditor.loading,
          error: '',
        },
      }
    }
    case CreateTemplateActions.SaveDraftTemplate: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: 'Saving your draft template',
          error: '',
        },
      }
    }
    case CreateTemplateActions.SaveDraftTemplateSuccess: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: '',
          error: '',
        },
      }
    }
    case CreateTemplateActions.SaveDraftTemplateFailure: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: '',
          error: action.payload.message,
        },
      }
    }
    case CreateTemplateActions.PublishTemplate: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: 'Publishing your template',
          error: '',
        },
      }
    }
    case CreateTemplateActions.PublishTemplateSuccess: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: '',
          error: '',
        },
      }
    }
    case CreateTemplateActions.PublishTemplateFailure: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: '',
          error: action.payload.message,
        },
      }
    }
  }
  return state
}
