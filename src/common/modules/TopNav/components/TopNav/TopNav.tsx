import classes from 'classnames'
import React from 'react'
import { NavigationItem } from '../../types'
import styles from './TopNav.module.scss'

export interface Props {
  handleHomeClicked?: () => void
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
}

export const TopNav: React.FunctionComponent<Props> = ({
  handleHomeClicked,
  handleNavigationItemClicked,
  selectedNavigationItem,
}) => {
  const topNavItemStyle = (navigationItem: NavigationItem): object => {
    return {
      [styles.topNavItem]: true,
      [styles.topNavItemSelected]: selectedNavigationItem === navigationItem,
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.onGatherLogo} onClick={handleHomeClicked}>
        onGather
      </h1>
      <div className={styles.callsToAction}>
        <div
          className={classes(topNavItemStyle(NavigationItem.Create))}
          onClick={(): void =>
            handleNavigationItemClicked(NavigationItem.Create)
          }
          data-testid="searchIconContainer"
        >
          <p>Create</p>
        </div>
        <div
          className={classes(topNavItemStyle(NavigationItem.SignIn))}
          onClick={(): void =>
            handleNavigationItemClicked(NavigationItem.SignIn)
          }
          data-testid="profileIconContainer"
        >
          <p>Login</p>
        </div>
      </div>
    </div>
  )
}
