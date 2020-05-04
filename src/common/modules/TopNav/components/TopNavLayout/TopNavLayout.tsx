import React, { ReactNode } from 'react'
import { NavigationItem, TopNavType } from '../../types'
import { AuthModal } from '../AuthModal'
import { TopNav } from '../TopNav'
import styles from './TopNavLayout.module.scss'

export interface Props {
  children?: ReactNode
  handleHomeClicked?: () => void
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
  topNavType: TopNavType
  handleContinueWithClicked?: () => void
  authIsRequired: boolean
  isAuthenticated?: boolean
  isAuthenticationLoading?: boolean
}

export const TopNavLayout: React.FunctionComponent<Props> = ({
  children,
  topNavType,
  isAuthenticated,
  isAuthenticationLoading,
  authIsRequired,
  handleHomeClicked,
  handleNavigationItemClicked,
  selectedNavigationItem,
  handleContinueWithClicked,
}) => (
  <div className={styles.container}>
    {authIsRequired && !isAuthenticated && (
      <div className={styles.authModal}>
        <AuthModal
          isAuthenticationLoading={isAuthenticationLoading}
          handleContinueWithClicked={handleContinueWithClicked}
        />
      </div>
    )}
    <nav className={styles.TopNav}>
      <TopNav
        topNavType={topNavType}
        handleHomeClicked={handleHomeClicked}
        handleNavigationItemClicked={handleNavigationItemClicked}
        selectedNavigationItem={selectedNavigationItem}
      />
    </nav>
    <div className={styles.children}>{children}</div>
  </div>
)
