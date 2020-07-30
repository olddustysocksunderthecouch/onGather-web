import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './PermissionRationalModal.module.scss'

export interface Props {
  handleScopeRequestClicked: () => void
  handleCloseModalClicked: () => void
}

export const PermissionRationalModal: React.FunctionComponent<Props> = ({
  handleScopeRequestClicked,
  handleCloseModalClicked,
}) => {
  return (
    <div className={styles.permissionModal}>
      <h1 className={styles.signUpTitle}>We need your permission...</h1>
      <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      <p className={styles.description}>
        ... to send out invitations to you and your friends, using Google
        Calendar.
      </p>
      <p className={styles.rational}>
        We will only use this permission to create and edit events on your
        Google Calendar, that you make with this website.
      </p>
      <button
        className={styles.continueWithButton}
        onClick={handleScopeRequestClicked}
      >
        <a className={styles.buttonText}>Continue</a>
      </button>
      <p>
        *By continuing you agree to the{' '}
        <Link
          style={{ textDecoration: 'underline' }}
          to="/terms-and-conditions"
        >
          Terms & Conditions
        </Link>
      </p>
    </div>
  )
}
