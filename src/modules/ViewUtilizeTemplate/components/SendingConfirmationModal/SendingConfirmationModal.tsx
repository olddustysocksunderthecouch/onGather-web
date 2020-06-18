import React from 'react'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './SendingConfirmationModal.module.scss'

export interface Props {
  handleContinueWithClicked?: () => void
  handleCloseModalClicked: () => void
}

export const SendingConfirmationModal: React.FunctionComponent<Props> = ({
  handleContinueWithClicked,
  handleCloseModalClicked,
}) => {
  return (
    <div className={styles.authModal}>
      <h1 className={styles.signUpTitle}>Just to confirm...</h1>
      <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      <button
        className={styles.continueWithButton}
        onClick={handleContinueWithClicked}
      >
        <div className={styles.buttonText}>Send away!</div>
      </button>
    </div>
  )
}
