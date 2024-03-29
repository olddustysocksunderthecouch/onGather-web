import { GatheringDraft, Template } from './types'

export const templateMock: Template = {
  templateId: 'some-id',
  status: 'publish',
  category: 'Popular',
  title: 'Bookclub: Same book',
  shortDescription:
    'A simple book club that gets people reading together and diving into the finer details of a book. Let’s put a character limit on here and see what happens. It’s quite a bit of words that.',
  personalizedDescription: 'A personal touch of something or other',
  mainAimsOutcomes: ['Great Conversation', 'Gain Insights', 'Book Sharing'],
  suggestedDuration: '120',
  imageUrls: {
    raw:
      'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
    regular:
      'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
    full:
      'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
    small:
      'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
    thumb:
      'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
  },
  whatYouDo:
    'Since the COVID-19 pandemic, my famous Drag Queen experiences went from sold out to zero guests. Though we’re closing the doors for the next few months until the global situation improves, THE SHOW MUST GO ON!',
  howYouDo:
    'Since the COVID-19 pandemic, my famous Drag Queen experiences went from sold out to zero guests. Though we’re closing the doors for the next few months until the global situation improves, THE SHOW MUST GO ON!',
  hostInstructions:
    'A simple book club that gets people reading together and diving into the finer details of a book.',
  participantRange: [2, 8],
  callProviders: ['Google Meet (Hangouts)'],
}

export const gatheringDraftMock: GatheringDraft = {
  templateId: 'some-id',
  title: 'Bookclub: Same book',
  personalizedDescription: 'A personal touch of something or other',
  inviteeEmails: ['a@a.com', 'b@b.com'],
  startTimestamp: new Date().toISOString(),
  duration: '120',
  whatYouDo:
    'Since the COVID-19 pandemic, my famous Drag Queen experiences went from sold out to zero guests. Though we’re closing the doors for the next few months until the global situation improves, THE SHOW MUST GO ON!',
  howYouDo:
    'Since the COVID-19 pandemic, my famous Drag Queen experiences went from sold out to zero guests. Though we’re closing the doors for the next few months until the global situation improves, THE SHOW MUST GO ON!',
  callProvider: 'Google Meet (Hangouts)',
}
