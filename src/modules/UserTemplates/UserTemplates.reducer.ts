import {
  UserTemplatesActions,
  UserTemplatesActionTypes,
  UserTemplatesState,
} from './types'

export const initialState: UserTemplatesState = {
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
  action: UserTemplatesActionTypes,
): UserTemplatesState {
  switch (action.type) {
    case UserTemplatesActions.SetEditorTemplateData: {
      return {
        ...state,
        templateEditor: {
          ...action.payload.template,
          loading: state.templateEditor.loading,
          error: '',
        },
      }
    }
    case UserTemplatesActions.SaveDraftTemplate: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: 'Saving your draft template',
          error: '',
        },
      }
    }
    case UserTemplatesActions.SaveDraftTemplateSuccess: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: '',
          error: '',
        },
      }
    }
    case UserTemplatesActions.SaveDraftTemplateFailure: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: '',
          error: action.payload.message,
        },
      }
    }
    case UserTemplatesActions.PublishTemplate: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: 'Publishing your template',
          error: '',
        },
      }
    }
    case UserTemplatesActions.PublishTemplateSuccess: {
      return {
        ...state,
        templateEditor: {
          ...state.templateEditor,
          loading: '',
          error: '',
        },
      }
    }
    case UserTemplatesActions.PublishTemplateFailure: {
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
