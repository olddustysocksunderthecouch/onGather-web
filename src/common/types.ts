export interface ImageUrls {
  thumb: string
  small: string
  regular: string
  full: string
  raw: string
}

export interface TemplateFirestoreResult {
  status: 'draft' | 'publish'
  category: string
  title: string
  shortDescription: string
  personalizedDescription: string
  mainAimsOutcomes: string[]
  callProviders: string[]
  suggestedDuration: string
  imageUrls: ImageUrls | null
  whatYouDo: string
  howYouDo: string
  hostInstructions: string
  participantRange: number[]
}

export interface Template extends TemplateFirestoreResult {
  templateId: string
}

export interface TemplateCreation {
  status?: 'draft' | 'publish'
  templateId?: string
  category: string
  title: string
  shortDescription: string
  personalizedDescription: string
  mainAimsOutcomes: string[]
  callProviders: string[]
  suggestedDuration: string
  imageUrls: ImageUrls | null
  hostInstructions: string
  whatYouDo: string
  howYouDo: string
  participantRange: number[]
}

export interface Gathering {
  templateId: string
  title: string
  personalizedDescription: string
  whatYouDo: string
  howYouDo: string
  hostInstructions: string
  organizerUid: string
  organizerEmail: string
  inviteeEmails: string[]
  startTimestamp: Date
  duration: string
  callProvider: string
  callUrl: string
  createdTimestamp: Date
}

export interface CallProvider {
  provider: string
}

export interface Duration {
  timeMinutes: string
  timeFormatted: string
}

export interface MenuItem {
  title: string
  handleItemClicked: (id: string) => void
}

export interface User {
  displayName: string
  email: string
  photoURL: string
  uid: string
  scopes?: string[]
  scopeError?: string
}
