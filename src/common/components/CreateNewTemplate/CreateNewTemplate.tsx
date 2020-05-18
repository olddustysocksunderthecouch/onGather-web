import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CreateNewTemplate.module.scss'

export interface Props {
  handleCreateNewClick: () => void
}

export const CreateNewTemplate: React.FunctionComponent<Props> = ({
  handleCreateNewClick,
}) => (
  <Link
    className={styles.createNewTemplate}
    to="create-template"
    onClick={handleCreateNewClick}
  >
    <button>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.0001 0.333252C25.737 0.333252 19.6146 2.19047 14.407 5.67005C9.19944 9.14963 5.14064 14.0953 2.74387 19.8816C0.347095 25.6679 -0.280011 32.035 0.941854 38.1778C2.16372 44.3205 5.17968 49.963 9.60834 54.3916C14.037 58.8203 19.6795 61.8363 25.8222 63.0581C31.9649 64.28 38.332 63.6529 44.1184 61.2561C49.9047 58.8593 54.8503 54.8005 58.3299 49.593C61.8095 44.3854 63.6667 38.263 63.6667 31.9999C63.6667 27.8414 62.8476 23.7236 61.2562 19.8816C59.6648 16.0396 57.3323 12.5487 54.3918 9.6082C51.4512 6.66768 47.9603 4.33513 44.1184 2.74373C40.2764 1.15233 36.1586 0.333252 32.0001 0.333252V0.333252ZM32.0001 57.3333C26.9896 57.3333 22.0917 55.8475 17.9256 53.0638C13.7596 50.2802 10.5125 46.3236 8.59511 41.6946C6.67769 37.0655 6.176 31.9718 7.1535 27.0576C8.13099 22.1434 10.5438 17.6295 14.0867 14.0865C17.6296 10.5436 22.1436 8.13085 27.0578 7.15336C31.972 6.17587 37.0656 6.67755 41.6947 8.59497C46.3238 10.5124 50.2803 13.7594 53.0639 17.9255C55.8476 22.0915 57.3334 26.9895 57.3334 31.9999C57.3334 38.7187 54.6643 45.1624 49.9134 49.9133C45.1625 54.6642 38.7189 57.3333 32.0001 57.3333V57.3333ZM44.6667 28.8333H35.1667V19.3333C35.1667 18.4934 34.8331 17.6879 34.2392 17.0941C33.6454 16.5002 32.8399 16.1666 32.0001 16.1666C31.1602 16.1666 30.3547 16.5002 29.7609 17.0941C29.167 17.6879 28.8334 18.4934 28.8334 19.3333V28.8333H19.3334C18.4935 28.8333 17.6881 29.1669 17.0942 29.7607C16.5004 30.3546 16.1667 31.1601 16.1667 31.9999C16.1667 32.8398 16.5004 33.6452 17.0942 34.2391C17.6881 34.833 18.4935 35.1666 19.3334 35.1666H28.8334V44.6666C28.8334 45.5064 29.167 46.3119 29.7609 46.9058C30.3547 47.4996 31.1602 47.8333 32.0001 47.8333C32.8399 47.8333 33.6454 47.4996 34.2392 46.9058C34.8331 46.3119 35.1667 45.5064 35.1667 44.6666V35.1666H44.6667C45.5066 35.1666 46.312 34.833 46.9059 34.2391C47.4998 33.6452 47.8334 32.8398 47.8334 31.9999C47.8334 31.1601 47.4998 30.3546 46.9059 29.7607C46.312 29.1669 45.5066 28.8333 44.6667 28.8333Z"
          fill="#E0E0E0"
        />
      </svg>
      Create a new template
    </button>
  </Link>
)
