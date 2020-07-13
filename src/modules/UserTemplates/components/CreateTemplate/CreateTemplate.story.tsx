import React from 'react'
import { CreateTemplate, Props } from './CreateTemplate'

export default {
  title: 'Views/CreateTemplate',
  component: CreateTemplate,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <CreateTemplate
    selectedTemplateId=""
    loading="Here is an error"
    error="error"
    handleSaveDraftClicked={(): void => undefined}
    handlePublishClicked={(): void => undefined}
    initialTemplateEditorData={{
      templateId: '',
      loading: '',
      error: '',
      category: '',
      title: '',
      shortDescription: '',
      personalizedDescription: '',
      mainAimsOutcomes: ['Great Conversation', 'Gain Insights', 'Book Sharing'],
      suggestedDuration: '',
      imageUrls: '' as any,
      hostInstructions: '',
      whatYouDo: '',
      howYouDo: '',
      participantRange: [1, 2],
      callProviders: [],
    }}
    handleImageSelected={(): void => undefined}
    handleFetchImages={(): void => undefined}
    areNextImagesLoading={true}
    imageSearchResults={{} as any}
    totalImagesAvailable={2}
    searchTerm=""
  />
)

defaultState.story = {
  name: 'default',
}
