export interface TemplateFirestoreResult {
  status: 'draft' | 'publish'
  category: string
  title: string
  shortDescription: string
  mainAimsOutcomes: string
  suggestedDuration: string
  imageUrls: ImageUrls | null
  whatYouDo: string
  howYouDo: string
  hostInstructions: string
  participantRange: number[]
}

export interface ImageUrls {
  thumb: string
  small: string
  regular: string
  full: string
  raw: string
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
  mainAimsOutcomes: string
  suggestedDuration: string
  imageUrls: ImageUrls | null
  hostInstructions: string
  whatYouDo: string
  howYouDo: string
  participantRange: number[]
}

export interface Duration {
  timeMinutes: string
  timeFormatted: string
}

export interface MenuItem {
  title: string
  handleItemClicked: (id: string) => void
}
