export interface TemplateFirestoreResult {
  status: 'draft' | 'publish'
  category: string
  title: string
  shortDescription: string
  mainAimsOutcomes?: string
  suggestedDuration?: string
  imageUrl?: string
  hostInstructions?: string
  invitationDescription?: string
}

export interface Template extends TemplateFirestoreResult {
  templateId: string
}

export interface TemplateCreation {
  status?: 'draft' | 'publish'
  templateId?: string
  category?: string
  title?: string
  shortDescription?: string
  mainAimsOutcomes?: string
  suggestedDuration?: string
  imageUrl?: string
  hostInstructions?: string
  invitationDescription?: string
}

export interface Duration {
  timeMinutes: string
  timeFormatted: string
}

export interface MenuItem {
  title: string
  handleItemClicked: (id: string) => void
}
