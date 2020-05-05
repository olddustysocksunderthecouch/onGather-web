import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useWindowDimensions } from '../../../../hooks'
import { TopNavButton } from '../../types'
import DropArrowIcon from './assets/drop-arrow.svg'
import styles from './SignedInMenu.module.scss'

export interface Props {
  displayName?: string
  profilePic?: string
  topNavButton?: TopNavButton
  handleSignOutClicked?: () => void
}

export const SignedInMenu: React.FunctionComponent<Props> = ({
  displayName,
  profilePic,
  handleSignOutClicked,
  topNavButton,
}) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const handleSignOutClick = (event: React.MouseEvent<EventTarget>): void => {
    handleSignOutClicked && handleSignOutClicked()
    handleClose(event)
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  const history = useHistory()
  const { width } = useWindowDimensions()

  const topNavButtonMenuItem =
    width < 450 && topNavButton ? (
      <MenuItem onClick={(): void => history.push(topNavButton.path)}>
        {topNavButton.text}
      </MenuItem>
    ) : undefined

  return (
    <div className={styles.container}>
      <button
        className={styles.buttonContainer}
        ref={anchorRef}
        onClick={handleToggle}
      >
        <img src={profilePic} alt="Profile Pic" className={styles.profilePic} />
        <p>{displayName}</p>
        <img
          src={DropArrowIcon}
          alt="drop arrow"
          className={styles.dropArrow}
        />
      </button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps }): any => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'right top' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {topNavButtonMenuItem}
                  <MenuItem onClick={handleSignOutClick}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
