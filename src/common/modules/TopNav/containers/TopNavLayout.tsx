import React, { Dispatch, ReactNode } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import {
  signInGoogle,
  signOutGoogle,
} from '../../../../modules/App/App.actions'
import { RootState } from '../../../redux/types'
import { selectors as firebaseSelectors } from '../../firebase'
import { TopNavLayout } from '../components/TopNavLayout'
import {
  navigateToCreateTemplate,
  navigateToHome,
  navigateToUserTemplates,
} from '../TopNav.actions'
import { NavigationItem, TopNavButton } from '../types'

export interface Props {
  children: ReactNode
  handleHomeClicked?: () => void
  topNavButton?: TopNavButton
  handleNavigationItemClicked?: (navigationItem: NavigationItem) => void
  handleContinueWithClicked?: () => void
  handleSignOutClicked?: () => void
  selectedNavigationItem?: NavigationItem
  authIsRequired?: boolean
  isAuthenticated?: boolean
  isAuthenticationLoading?: boolean
  displayName?: string
  profilePic?: string
}

const navigationItemToActionMap: { [key in NavigationItem]: AnyAction } = {
  [NavigationItem.Create]: navigateToCreateTemplate(),
  [NavigationItem.Templates]: navigateToUserTemplates(),
  [NavigationItem.SignIn]: signInGoogle(),
  [NavigationItem.SignOut]: signOutGoogle(),
}

const TopNavLayoutContainer = ({
  children,
  topNavButton,
  isAuthenticated,
  authIsRequired = false,
  isAuthenticationLoading,
  handleHomeClicked,
  handleNavigationItemClicked,
  handleContinueWithClicked,
  selectedNavigationItem,
  displayName,
  profilePic,
  handleSignOutClicked,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout
    displayName={displayName}
    profilePic={profilePic}
    isAuthenticated={isAuthenticated}
    isAuthenticationLoading={isAuthenticationLoading}
    authIsRequired={authIsRequired}
    handleContinueWithClicked={handleContinueWithClicked}
    topNavButton={topNavButton}
    handleHomeClicked={handleHomeClicked}
    selectedNavigationItem={selectedNavigationItem!}
    handleNavigationItemClicked={handleNavigationItemClicked!}
    handleSignOutClicked={handleSignOutClicked}
  >
    {children}
  </TopNavLayout>
)

const mapStateToProps = (state: RootState): any => ({
  isAuthenticated: firebaseSelectors.selectIsAuthenticated(state),
  isAuthenticationLoading: firebaseSelectors.selectIsAuthenticationLoading(
    state,
  ),
  displayName: firebaseSelectors.selectDisplayName(state),
  profilePic: firebaseSelectors.selectPhotoURL(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem): void =>
    dispatch(navigationItemToActionMap[navigationItemClicked]),
  handleHomeClicked: (): void => dispatch(navigateToHome()),
  handleContinueWithClicked: (): void => dispatch(signInGoogle()),
  handleSignOutClicked: (): void => dispatch(signOutGoogle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavLayoutContainer)
