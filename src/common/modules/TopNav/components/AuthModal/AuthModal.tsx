import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CloseIcon from './assets/close-icon.svg'
import GoogleIcon from './assets/google-icon.svg'
import styles from './AuthModal.module.scss'

export interface Props {
  handleContinueWithClicked?: () => void
}

export const AuthModal: React.FunctionComponent<Props> = ({
  handleContinueWithClicked,
}) => {
  const history = useHistory()
  return (
    <div className={styles.authModal}>
      <h1>Sign in/up</h1>
      <button
        className={styles.closeIcon}
        onClick={(): void => history.goBack()}
      >
        <img src={CloseIcon} alt="Google Icon" />
      </button>
      <p className={styles.description}>This will just take a moment...</p>
      <button
        className={styles.continueWithButton}
        onClick={handleContinueWithClicked}
      >
        <img className={styles.googleIcon} src={GoogleIcon} alt="Google Icon" />
        <div className={styles.buttonText}>Continue with Google</div>
      </button>
      <p>
        *By continuing you agree to the <Link to="/">Terms & Conditions</Link>
      </p>
    </div>
  )
}
