import {
  ImageUrls,
  TemplateCreation,
  TemplateFirestoreResult,
} from '../../common/types'

export enum Category {
  Games = 'Games',
  BookClub = 'Book Club',
  Meditation = 'Meditation',
  Craft = 'Craft',
  Workout = 'Workout',
  Discussion = 'Discussion',
}

export interface TemplateEditorState extends TemplateCreation {
  error: string
  loading: string
}
export interface ImageSearch {
  searchTerm: string | null
  imageSearchResults: ImageSearchResult[]
  totalImagesAvailable: number | null
  loading: boolean
  error: string | null
}

export interface UserTemplatesState {
  selectedTemplateId: string
  templateEditor: TemplateEditorState
  imageSearch: ImageSearch
}

export interface ImageSearchResult {
  images: ImageUrls
  attributionName: string
  attributionLink: string
  altDescription: string
}

export enum UserTemplatesActions {
  CreateNewTemplate = '/UserTemplates/CREATE_NEW_TEMPLATE',
  EditExistingTemplate = '/UserTemplates/EDIT_EXISTING_TEMPLATE',
  SetExistingTemplateEditorData = '/UserTemplates/SET_EXISTING_TEMPLATE_EDITOR_DATA',
  SetEditorTemplateData = '/UserTemplates/SET_EDITOR_TEMPLATE_DATA',
  SaveDraftTemplate = '/UserTemplates/SAVE_DRAFT_TEMPLATE',
  SaveDraftTemplateSuccess = '/UserTemplates/SAVE_DRAFT_TEMPLATE_SUCCESS',
  SaveDraftTemplateFailure = '/UserTemplates/SAVE_DRAFT_TEMPLATE_FAILURE',
  PublishTemplate = '/UserTemplates/PUBLISH_TEMPLATE',
  PublishTemplateSuccess = '/UserTemplates/PUBLISH_TEMPLATE_SUCCESS',
  PublishTemplateFailure = '/UserTemplates/PUBLISH_TEMPLATE_FAILURE',
  UploadImage = '/UserTemplates/UPLOAD_IMAGE',
  UploadImageSuccess = '/UserTemplates/UPLOAD_IMAGE_SUCCESS',
  UploadImageFailure = '/UserTemplates/UPLOAD_IMAGE_FAILURE',
  SearchForImages = '/UserTemplates/SEARCH_FOR_IMAGES',
  SearchForImagesSuccess = '/UserTemplates/SEARCH_FOR_IMAGES_SUCCESS',
  SearchForImagesFailure = '/UserTemplates/SEARCH_FOR_IMAGES_FAILURE',
}

export interface CreateNewTemplateAction {
  type: typeof UserTemplatesActions.CreateNewTemplate
}

export interface EditExistingTemplateAction {
  type: typeof UserTemplatesActions.EditExistingTemplate
  payload: {
    templateId: string
    type: string
  }
}

export interface SetExistingTemplateEditorDataAction {
  type: typeof UserTemplatesActions.SetExistingTemplateEditorData
  payload: {
    templateId: string
    templateData: TemplateFirestoreResult
  }
}

export interface SetEditorTemplateDataAction {
  type: typeof UserTemplatesActions.SetEditorTemplateData
  payload: {
    template: TemplateCreation
  }
}

export interface SaveDraftTemplateAction {
  type: typeof UserTemplatesActions.SaveDraftTemplate
  payload: {
    template: TemplateCreation
  }
}

export interface SaveDraftTemplateSuccessAction {
  type: typeof UserTemplatesActions.SaveDraftTemplateSuccess
}

export interface SaveDraftTemplateSuccessAction {
  type: typeof UserTemplatesActions.SaveDraftTemplateSuccess
}

export interface SaveDraftTemplateFailureAction {
  type: typeof UserTemplatesActions.SaveDraftTemplateFailure
  payload: {
    message: string
  }
}

export interface PublishTemplateAction {
  type: typeof UserTemplatesActions.PublishTemplate
  payload: {
    template: TemplateCreation
  }
}

export interface PublishTemplateSuccessAction {
  type: typeof UserTemplatesActions.PublishTemplateSuccess
}

export interface PublishTemplateFailureAction {
  type: typeof UserTemplatesActions.PublishTemplateFailure
  payload: {
    message: string
  }
}

export interface UploadImageAction {
  type: typeof UserTemplatesActions.UploadImage
  payload: {
    file: File
  }
}

export interface UploadImageSuccessAction {
  type: typeof UserTemplatesActions.UploadImageSuccess
  payload: {
    result: any
  }
}

export interface UploadImageFailureAction {
  type: typeof UserTemplatesActions.UploadImageFailure
  payload: {
    message: string
  }
}

export interface SearchForImagesAction {
  type: typeof UserTemplatesActions.SearchForImages
  payload: {
    searchTerm: string
    page: number
  }
}

export interface SearchForImagesSuccessAction {
  type: typeof UserTemplatesActions.SearchForImagesSuccess
  payload: {
    searchTerm: string
    imageSearchResults: ImageSearchResult[]
    totalImagesAvailable: number
  }
}

export interface SearchForImagesFailureAction {
  type: typeof UserTemplatesActions.SearchForImagesFailure
  payload: {
    error: string
  }
}

export type UserTemplatesActionTypes =
  | CreateNewTemplateAction
  | EditExistingTemplateAction
  | SetExistingTemplateEditorDataAction
  | SetEditorTemplateDataAction
  | SaveDraftTemplateAction
  | SaveDraftTemplateSuccessAction
  | SaveDraftTemplateFailureAction
  | PublishTemplateAction
  | PublishTemplateSuccessAction
  | PublishTemplateFailureAction
  | UploadImageAction
  | UploadImageSuccessAction
  | UploadImageFailureAction
  | SearchForImagesAction
  | SearchForImagesSuccessAction
  | SearchForImagesFailureAction
