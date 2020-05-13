import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ImagePicker.module.scss'

export interface Props {
  handleContinueWithClicked?: () => void
  handleAuthModalClose: () => void
}

export const ImagePicker: React.FunctionComponent<Props> = ({
  handleContinueWithClicked,
  handleAuthModalClose,
}) => {
  return (
    <div className={styles.authModal}>
      <h1 className={styles.signUpTitle}>Sign in/up</h1>
      <button
        className={styles.closeIcon}
        onClick={handleAuthModalClose}
      ></button>
      <p className={styles.description}>This will just take a moment...</p>
      <button
        className={styles.continueWithButton}
        onClick={handleContinueWithClicked}
      >
        <div className={styles.buttonText}>Continue with Google</div>
      </button>
      <p>
        *By continuing you agree to the <Link to="/">Terms & Conditions</Link>
      </p>
    </div>
  )
}
