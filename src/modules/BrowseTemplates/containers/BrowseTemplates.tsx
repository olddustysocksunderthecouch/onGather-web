import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Template } from '../../../common/types'
import { createNewTemplate } from '../../UserTemplates/UserTemplates.actions'
import { selectActiveCategory } from '../BrowseTemplates.actions'
import { BrowseTemplates } from '../components/BrowseTemplates'
import {
  firebaseSelectors as FirebaseBrowseTemplatesSelectors,
  selectors as BrowseTemplatesSelectors,
} from '../index'

interface Props extends ConnectedReduxProps<AnyAction> {
  templates: Template[]
  activeCategory: string
  handleCategoryClicked: (category: string) => void
  handleCreateNewTemplateClicked: () => void
}

const BrowseTemplatesContainer = ({
  templates,
  activeCategory,
  handleCategoryClicked,
  handleCreateNewTemplateClicked,
}: Props): React.FunctionComponentElement<Props> => {
  useFirestoreConnect([
    {
      collection: 'templates',
      where: ['status', '==', 'publish'],
      storeAs: 'browseTemplates',
    },
  ])
  return (
    <TopNavLayout
      topNavButton={{ text: 'Your activities', path: '/user-templates' }}
    >
      <BrowseTemplates
        activeCategory={activeCategory}
        templates={templates}
        handleCategoryClicked={handleCategoryClicked}
        handleCreateNewTemplateClicked={handleCreateNewTemplateClicked}
      />
    </TopNavLayout>
  )
}

const mapStateToProps = (state: RootState): any => ({
  templates: FirebaseBrowseTemplatesSelectors.selectTemplateForCategory(state),
  activeCategory: BrowseTemplatesSelectors.selectActiveCategory(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleCategoryClicked: (category: string): void =>
    dispatch(selectActiveCategory(category)),
  handleCreateNewTemplateClicked: (): void => dispatch(createNewTemplate()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrowseTemplatesContainer)
