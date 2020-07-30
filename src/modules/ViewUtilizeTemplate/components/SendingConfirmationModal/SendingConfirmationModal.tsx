import React from 'react'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './SendingConfirmationModal.module.scss'

export interface Props {
  handleContinueWithClicked?: () => void
  handleCloseModalClicked: () => void
  inviteeEmails: string[]
}

export const SendingConfirmationModal: React.FunctionComponent<Props> = ({
  handleContinueWithClicked,
  handleCloseModalClicked,
  inviteeEmails,
}) => {
  const renderNoInvitees = !inviteeEmails || inviteeEmails.length === 0
  const sendButtonText = renderNoInvitees
    ? 'Yes, please only send me an invite'
    : 'Send'
  return (
    <div className={styles.authModal}>
      <h1 className={styles.signUpTitle}>Just to confirm...</h1>
      <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      {renderNoInvitees && (
        <p>Are you sure that you you don&apos;t want to invite someone?</p>
      )}
      {inviteeEmails && inviteeEmails.length > 0 && (
        <div>
          <p>
            Press send and we&apos;ll take care of emailing and sending a
            Calendar invite to everyone.
          </p>
          <p>
            You&apos;re inviting:{' '}
            <span className={styles.invitees}>{inviteeEmails.join(', ')}</span>
          </p>
        </div>
      )}

      <button
        className={styles.continueWithButton}
        onClick={handleContinueWithClicked}
      >
        <div className={styles.buttonText}>{sendButtonText}</div>
      </button>
    </div>
  )
}
