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
    handleImageSelected={(): void => undefined}
    handleSaveDraftClicked={(): void => undefined}
    handlePublishClicked={(): void => undefined}
    initialTemplateEditorData={{
      templateId: '',
      loading: '',
      error: '',
      category: '',
      title: '',
      shortDescription: '',
      mainAimsOutcomes: '',
      suggestedDuration: '',
      imageUrl: '',
      hostInstructions: '',
      whatYouDo: '',
      howYouDo: '',
      participantRange: [1, 2],
    }}
    handleFetchImages={(): void => undefined}
    areNextImagesLoading={true}
    imageSearchResults={{} as any}
  />
)

defaultState.story = {
  name: 'default',
}
