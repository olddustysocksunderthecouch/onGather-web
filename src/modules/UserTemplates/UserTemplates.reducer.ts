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
    personalizedDescription: '',
    mainAimsOutcomes: [],
    suggestedDuration: '',
    participantRange: [],
    callProviders: [],
    imageUrls: {
      thumb: '',
      small: '',
      regular: '',
      full: '',
      raw: '',
    },
    hostInstructions: '',
    whatYouDo: '',
    howYouDo: '',
  },
  imageSearch: {
    searchTerm: null,
    loading: false,
    imageSearchResults: [],
    totalImagesAvailable: null,
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
        selectedTemplateId: '',
        templateEditor: {
          ...initialState.templateEditor,
        },
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
          personalizedDescription:
            action.payload.templateData.personalizedDescription,
          mainAimsOutcomes: action.payload.templateData.mainAimsOutcomes,
          suggestedDuration: action.payload.templateData.suggestedDuration,
          imageUrls: action.payload.templateData.imageUrls,
          hostInstructions: action.payload.templateData.hostInstructions,
          whatYouDo: action.payload.templateData.whatYouDo,
          howYouDo: action.payload.templateData.howYouDo,
          participantRange: action.payload.templateData.participantRange,
          callProviders: action.payload.templateData.callProviders,
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
      const updateTotalImagesAvailable =
        action.payload.page === 1 ? 0 : state.imageSearch.totalImagesAvailable
      return {
        ...state,
        imageSearch: {
          searchTerm: action.payload.searchTerm,
          loading: true,
          imageSearchResults: updateImages,
          error: null,
          totalImagesAvailable: updateTotalImagesAvailable,
        },
      }
    }
    case UserTemplatesActions.SearchForImagesSuccess: {
      const updateImages =
        state.imageSearch.searchTerm === action.payload.searchTerm ||
        action.payload.searchTerm.length === 0
          ? [...state.imageSearch.imageSearchResults].concat(
              action.payload.imageSearchResults,
            )
          : [...state.imageSearch.imageSearchResults]
      return {
        ...state,
        imageSearch: {
          searchTerm: state.imageSearch.searchTerm,
          loading: false,
          imageSearchResults: updateImages,
          totalImagesAvailable: action.payload.totalImagesAvailable,
          error: null,
        },
      }
    }
    case UserTemplatesActions.SearchForImagesFailure:
      return {
        ...state,
        imageSearch: {
          searchTerm: state.imageSearch.searchTerm,
          loading: false,
          imageSearchResults: [...state.imageSearch.imageSearchResults],
          error: action.payload.error,
          totalImagesAvailable: state.imageSearch.totalImagesAvailable,
        },
      }
  }
  return state
}
