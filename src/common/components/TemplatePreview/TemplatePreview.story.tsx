import React from 'react'
import { Props, TemplatePreview } from './TemplatePreview'

export default {
  title: 'Components/Common/TemplatePreview',
  component: TemplatePreview,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <TemplatePreview
    templateId={'some ide'}
    title={'Bookclub - Different book every week'}
    gatheringSize={'2-8 People'}
    suggestedDuration={'1hr 30min'}
    mainAimsOutcomes={'Great Conversation  | Gain Insights  | Book Sharing'}
    shortDescription={
      'A simple book club that gets people together to discuss the various books they’ve read'
    }
    handleTemplatePreviewClicked={(): void => undefined}
    destinationPath=""
  />
)

defaultState.story = {
  name: 'default',
}
