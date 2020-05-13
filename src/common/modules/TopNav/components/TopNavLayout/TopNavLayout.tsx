import React, { ReactNode, useState } from 'react'
import { NavigationItem, TopNavButton } from '../../types'
import { AuthModal } from '../AuthModal'
import { TopNav } from '../TopNav'
import styles from './TopNavLayout.module.scss'

export interface Props {
  children?: ReactNode
  displayName?: string
  profilePic?: string
  handleHomeClicked?: () => void
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
  topNavButton?: TopNavButton
  handleContinueWithClicked?: () => void
  handleSignOutClicked?: () => void
  authIsRequired: boolean
  isAuthenticated?: boolean
  isAuthenticationLoading?: boolean
}

export const TopNavLayout: React.FunctionComponent<Props> = ({
  children,
  displayName,
  profilePic,
  topNavButton,
  isAuthenticated,
  isAuthenticationLoading,
  authIsRequired,
  handleHomeClicked,
  handleNavigationItemClicked,
  selectedNavigationItem,
  handleContinueWithClicked,
  handleSignOutClicked,
}) => {
  const [signInClicked, setSignInClicked] = useState(false)

  const handleSignInClicked = (): void => {
    setSignInClicked(true)
  }

  const handleAuthModalClose =(): void => {
    setSignInClicked(false)
  }

  return (
    <div className={styles.container}>
      {(authIsRequired || signInClicked || isAuthenticationLoading) &&
        !isAuthenticated && (
          <div className={styles.authModal}>
            <AuthModal
              isAuthenticationLoading={isAuthenticationLoading}
              handleContinueWithClicked={handleContinueWithClicked}
              handleAuthModalClose={handleAuthModalClose}
            />
          </div>
        )}
      <nav className={styles.TopNav}>
        <TopNav
          isAuthenticated={isAuthenticated}
          displayName={displayName}
          profilePic={profilePic}
          topNavButton={topNavButton}
          handleHomeClicked={handleHomeClicked}
          handleNavigationItemClicked={handleNavigationItemClicked}
          selectedNavigationItem={selectedNavigationItem}
          handleSignOutClicked={handleSignOutClicked}
          handleSignInClicked={handleSignInClicked}
        />
      </nav>
      <div className={styles.children}>{children}</div>
    </div>
  )
}
