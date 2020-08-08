import classes from 'classnames'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useWindowDimensions } from '../../../../hooks'
import { NavigationItem, TopNavItem } from '../../types'
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
  activeNavPath?: string
  isAuthenticated?: boolean
}

const topNavItems: TopNavItem[] = [
  { text: 'Browse Activities', path: '/browse-activities' },
  { text: 'Your Activities', path: '/user-templates' },
  { text: 'Your Gatherings', path: '/gatherings' },
]

export const TopNav: React.FunctionComponent<Props> = ({
  profilePic,
  displayName,
  handleHomeClicked,
  activeNavPath,
  isAuthenticated,
  handleSignInClicked,
  handleSignOutClicked,
}) => {
  const { width } = useWindowDimensions()

  const navButtonStyle = (navPath: string): object => {
    return {
      [styles.navItem]: true,
      [styles.navItemSelected]: activeNavPath === navPath,
    }
  }

  return (
    <nav className={styles.container}>
      <h1 className={styles.onGatherLogo} onClick={handleHomeClicked}>
        onGather
      </h1>
      <div className={styles.topNavRight}>
        {isAuthenticated ? (
          <Fragment>
            {width > 720 && (
              <div className={styles.topNavLinks}>
                {topNavItems.map((topNavItem: TopNavItem) => {
                  return (
                    <Link
                      className={classes(navButtonStyle(topNavItem.path))}
                      to={topNavItem.path}
                      key={topNavItem.path}
                    >
                      {topNavItem.text}
                    </Link>
                  )
                })}
              </div>
            )}
            <SignedInMenu
              displayName={displayName}
              profilePic={profilePic}
              topNavItems={topNavItems}
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
