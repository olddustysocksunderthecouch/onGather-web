import React from 'react'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './PermissionRationalModal.module.scss'

export interface Props {
  handleScopeRequestClicked: () => void
  handleAuthModalClose: () => void
}

export const PermissionRationalModal: React.FunctionComponent<Props> = ({
  handleScopeRequestClicked,
  handleAuthModalClose,
}) => {
  return (
    <div className={styles.authModal}>
      <h1 className={styles.signUpTitle}>We need your permission...</h1>
      <button className={styles.closeIcon} onClick={handleAuthModalClose}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      <p className={styles.description}>
        ... to send out invitations to you and your friends, using Google
        Calendar
      </p>
      <button
        className={styles.continueWithButton}
        onClick={handleScopeRequestClicked}
      >
        <a className={styles.buttonText}>Continue</a>
      </button>
    </div>
  )
}
