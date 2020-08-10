import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../../../routes'
import { UpdateGatheringStatus } from '../../types'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './UpdatingSuccessErrorModal.module.scss'

export interface Props {
  updateGatheringStatus: UpdateGatheringStatus
  handleCloseModalClicked: () => void
}

export const UpdatingSuccessErrorModal: React.FunctionComponent<Props> = ({
  updateGatheringStatus,
  handleCloseModalClicked,
}) => {
  return (
    <div className={styles.loadingSuccessErrorModal}>
      <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      {updateGatheringStatus === UpdateGatheringStatus.Updating && (
        <Fragment>
          <h5>Updating...</h5>
          <p className={styles.creatingDescription}>
            We&apos;re sending everyone an update email & adjusting the event on
            everyone&apos;s Google Calendar
          </p>
          <div className={styles.loadingBar}></div>
        </Fragment>
      )}
      {updateGatheringStatus === UpdateGatheringStatus.Error && (
        <Fragment>
          <h5>Oh hot damn...</h5>
          <p className={styles.errorDescription}>
            There&apos;s been an error... please let Adrian know that
            you&apos;ve found a bug
          </p>
        </Fragment>
      )}
      {updateGatheringStatus === UpdateGatheringStatus.Success && (
        <Fragment>
          <h5>Update Successful!</h5>
          <p className={styles.description}>
            An update email has been sent out to everyone and everyone&apos;s
            Google Calendar has been adjusted!
          </p>
          <Link to={Routes.Gatherings} className={styles.modalButton}>
            <div>Go to Gatherings</div>
          </Link>
        </Fragment>
      )}
    </div>
  )
}
