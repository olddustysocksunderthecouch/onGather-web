import { BrowseButtonClickedAction, HomeActions } from './types'

export const browseButtonClicked = (
  buttonDescription: string,
): BrowseButtonClickedAction => ({
  type: HomeActions.BrowseButtonClicked,
  payload: {
    buttonDescription,
  },
})
