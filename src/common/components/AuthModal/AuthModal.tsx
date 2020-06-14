import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from './../../assets/close-icon.svg'
import GoogleIcon from './assets/google-icon.svg'
import styles from './AuthModal.module.scss'

export interface Props {
  handleContinueWithClicked?: () => void
  isAuthenticationLoading?: boolean
  handleAuthModalClose: () => void
}

export const AuthModal: React.FunctionComponent<Props> = ({
  isAuthenticationLoading,
  handleContinueWithClicked,
  handleAuthModalClose,
}) => {
  return (
    <div className={styles.authModal}>
      {isAuthenticationLoading ? (
        <div className={styles.loadingModal}>
          <h1 className={styles.loadingTitle}>Loading...</h1>
          <p className={styles.loadingDescription}>
            We&apos;re just getting a few things together
          </p>
          <div className={styles.loadingBar}></div>
        </div>
      ) : (
        <Fragment>
          <h1 className={styles.signUpTitle}>Sign in/up</h1>
          <button className={styles.closeIcon} onClick={handleAuthModalClose}>
            <img src={CloseIcon} alt="Close Icon" />
          </button>
          <p className={styles.description}>This will just take a moment...</p>
          <button
            className={styles.continueWithButton}
            onClick={handleContinueWithClicked}
          >
            <img
              className={styles.googleIcon}
              src={GoogleIcon}
              alt="Google Icon"
            />
            <div className={styles.buttonText}>Continue with Google</div>
          </button>
          <p>
            *By continuing you agree to the{' '}
            <Link to="/">Terms & Conditions</Link>
          </p>
        </Fragment>
      )}
    </div>
  )
}
