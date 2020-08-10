import React from 'react'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './UpdateConfirmationModal.module.scss'

export interface Props {
  handleSendUpdateClicked?: () => void
  handleCloseModalClicked: () => void
}

export const UpdateConfirmationModal: React.FunctionComponent<Props> = ({
  handleSendUpdateClicked,
  handleCloseModalClicked,
}) => {
  return (
    <div className={styles.updateConfirmationModal}>
      <h5 className={styles.title}>Happy to update?</h5>
      <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      <p>
        We&apos;ll send everyone an email with the updated details and adjust
        the event on everyone&apos;s calendar.
      </p>
      <button className={styles.modalButton} onClick={handleSendUpdateClicked}>
        <div className={styles.buttonText}>Send Update</div>
      </button>
    </div>
  )
}
