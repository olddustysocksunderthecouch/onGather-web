import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useWindowDimensions } from '../../../../hooks'
import { NavigationItem, TopNavButton } from '../../types'
import { SignedInMenu } from '../SignedInMenu/SignedInMenu'
import styles from './TopNav.module.scss'

export interface Props {
  profilePic?: string
  displayName?: string
  handleHomeClicked?: () => void
  handleSignOutClicked?: () => void
  handleSignInClicked?: () => void
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
  topNavButton?: TopNavButton
  isAuthenticated?: boolean
}

export const TopNav: React.FunctionComponent<Props> = ({
  profilePic,
  displayName,
  handleHomeClicked,
  topNavButton,
  isAuthenticated,
  handleSignInClicked,
  handleSignOutClicked,
}) => {
  const { width } = useWindowDimensions()

  return (
    <nav className={styles.container}>
      <h1 className={styles.onGatherLogo} onClick={handleHomeClicked}>
        onGather
      </h1>
      <div className={styles.topNavRight}>
        {isAuthenticated ? (
          <Fragment>
            {width > 450 && topNavButton && (
              <Link to={topNavButton.path} style={{ textDecoration: 'none' }}>
                <button className={styles.topNavButton}>
                  {topNavButton.text}
                </button>
              </Link>
            )}
            <SignedInMenu
              displayName={displayName}
              profilePic={profilePic}
              topNavButton={topNavButton}
              handleSignOutClicked={handleSignOutClicked}
            />
          </Fragment>
        ) : (
          <button className={styles.signInButton} onClick={handleSignInClicked}>
            Sign up/in
          </button>
        )}
      </div>
    </nav>
  )
}
