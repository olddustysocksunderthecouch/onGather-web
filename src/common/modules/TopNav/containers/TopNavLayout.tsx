import React, { Dispatch, ReactNode } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import {
  signInGoogle,
  signOutGoogle,
} from '../../../../modules/App/App.actions'
import {
  publishTemplate,
  saveDraftTemplate,
} from '../../../../modules/UserTemplates/UserTemplates.actions'
import { RootState } from '../../../redux/types'
import { selectors as firebaseSelectors } from '../../firebase'
import { TopNavLayout } from '../components/TopNavLayout'
import {
  navigateToCreateTemplate,
  navigateToHome,
  navigateToUserTemplates,
} from '../TopNav.actions'
import { NavigationItem, TopNavType } from '../types'

export interface Props {
  children: ReactNode
  handleHomeClicked?: () => void
  topNavType: TopNavType
  handleNavigationItemClicked?: (navigationItem: NavigationItem) => void
  handleContinueWithClicked?: () => void
  selectedNavigationItem?: NavigationItem
  authIsRequired?: boolean
  isAuthenticated?: boolean
}

const navigationItemToActionMap: { [key in NavigationItem]: AnyAction } = {
  [NavigationItem.Create]: navigateToCreateTemplate(),
  [NavigationItem.Templates]: navigateToUserTemplates(),
  [NavigationItem.SignIn]: signInGoogle(),
  [NavigationItem.SignOut]: signOutGoogle(),
  [NavigationItem.SaveDraftTemplate]: saveDraftTemplate(),
  [NavigationItem.PublishTemplate]: publishTemplate(),
}

const TopNavLayoutContainer = ({
  children,
  topNavType,
  isAuthenticated,
  authIsRequired = false,
  handleHomeClicked,
  handleNavigationItemClicked,
  handleContinueWithClicked,
  selectedNavigationItem,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout
    isAuthenticated={isAuthenticated}
    authIsRequired={authIsRequired}
    handleContinueWithClicked={handleContinueWithClicked}
    topNavType={topNavType}
    handleHomeClicked={handleHomeClicked}
    selectedNavigationItem={selectedNavigationItem!}
    handleNavigationItemClicked={handleNavigationItemClicked!}
  >
    {children}
  </TopNavLayout>
)

const mapStateToProps = (state: RootState): any => ({
  isAuthenticated: firebaseSelectors.selectIsAuthenticated(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem): void =>
    dispatch(navigationItemToActionMap[navigationItemClicked]),
  handleHomeClicked: (): void => dispatch(navigateToHome()),
  handleContinueWithClicked: (): void => dispatch(signInGoogle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavLayoutContainer)
