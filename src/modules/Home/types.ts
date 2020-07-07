export interface HowItWorksItem {
  icon: string
  content: string
}

export enum HomeActions {
  BrowseButtonClicked = '/Home/BROWSE_BUTTON_CLICKED',
}

export interface BrowseButtonClickedAction {
  type: typeof HomeActions.BrowseButtonClicked
  payload: {
    buttonDescription: string
  }
}

export type HomeActionTypes = BrowseButtonClickedAction
