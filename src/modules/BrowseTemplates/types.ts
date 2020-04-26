export interface BrowseTemplatesState {
  activeCategory: string
}

export enum BrowseTemplatesActions {
  SelectActiveCategory = '/BrowseTemplates/SELECT_ACTIVE_CATEGORY',
}

export interface SelectActiveCategoryAction {
  type: typeof BrowseTemplatesActions.SelectActiveCategory
  payload: {
    category: string
  }
}

export type BrowseTemplatesActionTypes = SelectActiveCategoryAction
