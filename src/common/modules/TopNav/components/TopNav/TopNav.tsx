import classes from 'classnames'
import React from 'react'
import { NavigationItem, TopNavType } from '../../types'
import styles from './TopNav.module.scss'

export interface Props {
  handleHomeClicked?: () => void
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
  topNavType: TopNavType
}

const navigationItemsForTopNavType = {
  home: [
    NavigationItem.Templates,
    NavigationItem.SignIn,
    NavigationItem.SignOut,
  ],
  userTemplates: [NavigationItem.Create],
  createTemplate: [
    NavigationItem.SaveDraftTemplate,
    NavigationItem.PublishTemplate,
  ],
}

export const TopNav: React.FunctionComponent<Props> = ({
  handleHomeClicked,
  handleNavigationItemClicked,
  selectedNavigationItem,
  topNavType,
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
        {navigationItemsForTopNavType[topNavType].map(
          (navigationItem: NavigationItem) => {
            return (
              <div
                className={classes(topNavItemStyle(navigationItem))}
                onClick={(): void =>
                  handleNavigationItemClicked(navigationItem)
                }
                key={navigationItem}
              >
                <p>{navigationItem}</p>
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}
