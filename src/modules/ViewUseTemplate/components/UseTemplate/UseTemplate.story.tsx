import React from 'react'
import { TemplateFirestoreResult } from '../../../../common/types'
import { Props, UseTemplate } from './UseTemplate'

export default {
  title: 'Views/UseTemplate',
  component: UseTemplate,
}

const template: TemplateFirestoreResult = {
  status: 'publish',
  category: 'Popular',
  title: 'Bookclub: Same book',
  shortDescription:
    'A simple book club that gets people reading together and diving into the finer details of a book. Let’s put a character limit on here and see what happens. It’s quite a bit of words that.',
  mainAimsOutcomes: 'Deep Insight | Common Interest | Topic Centred',
  suggestedDuration: '120',
  imageUrl:
    'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
  whatYouDo:
    'Since the COVID-19 pandemic, my famous Drag Queen experiences went from sold out to zero guests. Though we’re closing the doors for the next few months until the global situation improves, THE SHOW MUST GO ON!',
  howYouDo:
    'Since the COVID-19 pandemic, my famous Drag Queen experiences went from sold out to zero guests. Though we’re closing the doors for the next few months until the global situation improves, THE SHOW MUST GO ON!',
  hostInstructions:
    'A simple book club that gets people reading together and diving into the finer details of a book.',
  participantRange: [2, 8],
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <UseTemplate template={template} />
)

defaultState.story = {
  name: 'default',
}