import React from 'react'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './PermissionRationalModal.module.scss'

export interface Props {
  handleContinueWithClicked?: () => void
  handleAuthModalClose: () => void
  userEmail: string
}

export const PermissionRationalModal: React.FunctionComponent<Props> = ({
  handleContinueWithClicked,
  handleAuthModalClose,
  userEmail,
}) => {
  return (
    <div className={styles.authModal}>
      <h1 className={styles.signUpTitle}>Calendar access required</h1>
      <button className={styles.closeIcon} onClick={handleAuthModalClose}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      <p className={styles.description}>
        To send out invitations to you and your friends we need to access your
        Google Calendar.
      </p>
      <button
        className={styles.continueWithButton}
        onClick={(): Window | null =>
          window.open(
            `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events&response_type=code&client_id=41626053541-65grf4kj4h45j738vp43v3fpango1olp.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fongather.com%2Fauth%2F&login_hint=${userEmail}`,
          )
        }
      >
        <div className={styles.buttonText}>Continue</div>
      </button>
    </div>
  )
}
