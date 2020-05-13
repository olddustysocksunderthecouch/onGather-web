import {
  UserTemplatesActions,
  UserTemplatesActionTypes,
  UserTemplatesState,
} from './types'

export const initialState: UserTemplatesState = {
  selectedTemplateId: '',
  templateEditor: {
    loading: '',
    error: '',
    category: '',
    title: '',
    shortDescription: '',
    mainAimsOutcomes: '',
    suggestedDuration: '',
    participantRange: [],
    imageUrl: '',
    hostInstructions: '',
    whatYouDo: '',
    howYouDo: '',
  },
  imageSearch: {
    searchTerm: null,
    loading: false,
    imageSearchResults: [],
    error: null,
  },
}

export function reducer(
  state = initialState,
  action: UserTemplatesActionTypes,
): UserTemplatesState {
  switch (action.type) {
    case UserTemplatesActions.CreateNewTemplate: {
      return {
        ...state,
        templateEditor: {
          ...initialState.templateEditor,
        },
      }
    }
    case UserTemplatesActions.CreateNewTemplateSuccess: {
      return {
        ...state,
        selectedTemplateId: action.payload.templateId,
      }
    }
    case UserTemplatesActions.SetExistingTemplateEditorData: {
      return {
        ...state,
        selectedTemplateId: action.payload.templateId,
        templateEditor: {
          ...state.templateEditor,
          category: action.payload.templateData.category,
          title: action.payload.templateData.title,
          shortDescription: action.payload.templateData.shortDescription,
          mainAimsOutcomes: action.payload.templateData.mainAimsOutcomes,
          suggestedDuration: action.payload.templateData.suggestedDuration,
          imageUrl: action.payload.templateData.imageUrl,
          hostInstructions: action.payload.templateData.hostInstructions,
          whatYouDo: action.payload.templateData.whatYouDo,
          howYouDo: action.payload.templateData.howYouDo,
          participantRange: action.payload.templateData.participantRange,
        },
      }
    }

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
    case UserTemplatesActions.SearchForImages: {
      const updateImages =
        action.payload.page > 1 ? [...state.imageSearch.imageSearchResults] : []
      return {
        ...state,
        imageSearch: {
          searchTerm: action.payload.searchTerm,
          loading: true,
          imageSearchResults: updateImages,
          error: null,
        },
      }
    }
    case UserTemplatesActions.SearchForImagesSuccess:
      return {
        ...state,
        imageSearch: {
          searchTerm: state.imageSearch.searchTerm,
          loading: false,
          imageSearchResults: [...state.imageSearch.imageSearchResults].concat(
            action.payload.imageSearchResults,
          ),
          error: null,
        },
      }
    case UserTemplatesActions.SearchForImagesFailure:
      return {
        ...state,
        imageSearch: {
          searchTerm: state.imageSearch.searchTerm,
          loading: false,
          imageSearchResults: [...state.imageSearch.imageSearchResults],
          error: action.payload.error,
        },
      }
  }
  return state
}
