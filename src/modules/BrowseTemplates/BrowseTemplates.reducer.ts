import {
  BrowseTemplatesActions,
  BrowseTemplatesActionTypes,
  BrowseTemplatesState,
} from './types'

export const initialState: BrowseTemplatesState = {
  activeCategory: 'All',
}

export function reducer(
  state = initialState,
  action: BrowseTemplatesActionTypes,
): BrowseTemplatesState {
  switch (action.type) {
    case BrowseTemplatesActions.SelectActiveCategory: {
      return {
        ...state,
        activeCategory: action.payload.category,
      }
    }
  }
  return state
}
