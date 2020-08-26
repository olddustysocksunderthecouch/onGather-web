import React, { Fragment } from 'react'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './UpdateGuestsConfirmationModal.module.scss'

export interface Props {
  handleSendUpdates?: () => void
  handleCloseModalClicked: () => void
  currentInviteeEmails: string[]
  newInviteeEmails: string[]
}

export const UpdateGuestsConfirmationModal: React.FunctionComponent<Props> = ({
  handleSendUpdates,
  handleCloseModalClicked,
  currentInviteeEmails,
  newInviteeEmails,
}) => {
  const added = newInviteeEmails.filter(
    (x) => !currentInviteeEmails.includes(x),
  )
  const removed = currentInviteeEmails.filter(
    (x) => !newInviteeEmails.includes(x),
  )

  const noChange = removed.length === 0 && added.length === 0

  const titleText = noChange ? 'No changes made' : 'Just to confirm...'
  const sendButtonText = noChange ? 'Close' : 'Send'

  return (
    <div className={styles.sendingConfirmationModal}>
      <h5>{titleText}</h5>
      <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      {!noChange && (
        <div>
          <p>
            Press send and we&apos;ll take care of emailing and sending a
            Calendar invite to everyone.
          </p>
          {added.length > 0 && (
            <Fragment>
              <p>
                You&apos;re inviting:{' '}
                <span className={styles.invitees}>{added.join(', ')}</span>
              </p>
            </Fragment>
          )}
          {removed.length > 0 && (
            <Fragment>
              <p>
                You&apos;re un-inviting:{' '}
                <span className={styles.invitees}>{removed.join(', ')}</span>
              </p>
            </Fragment>
          )}
        </div>
      )}

      <button
        className={styles.modalButton}
        onClick={noChange ? handleCloseModalClicked : handleSendUpdates}
      >
        <div className={styles.buttonText}>{sendButtonText}</div>
      </button>
    </div>
  )
}
