import { createMuiTheme, TextField, ThemeProvider } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React, { useState } from 'react'
import { isEmailValid } from '../../../../common/utils'
import styles from './AddParticipants.module.scss'

export interface Props {
  handleEmailsEntered: (handleEmailsEntered: string[]) => void
}

const theme = createMuiTheme({
  palette: { primary: grey },
  typography: { fontFamily: 'Raleway' },
})

export const AddParticipants: React.FunctionComponent<Props> = ({
  handleEmailsEntered,
}) => {
  const [emailAddresses, setEmailAddresses] = useState<string[]>([])
  const [currentEmailAddress, setCurrentEmailAddress] = useState('')
  const [error, setError] = useState('')

  const handleValidEmailEntered = (): void => {
    if (!emailAddresses.includes(currentEmailAddress)) {
      setEmailAddresses([currentEmailAddress, ...emailAddresses])
      handleEmailsEntered([currentEmailAddress, ...emailAddresses])
      setCurrentEmailAddress('')
    } else {
      setError("You've already entered this email address")
    }
  }
  const handleEmailDelete = (emailToDelete: string): void => {
    const newState = emailAddresses.filter((item) => item !== emailToDelete)
    setEmailAddresses(newState)
    handleEmailsEntered(newState)
  }

  return (
    <ThemeProvider theme={theme}>
      <form className={styles.addParticipantsContainer}>
        <TextField
          style={{ marginTop: '0px' }}
          fullWidth
          name="email"
          variant="standard"
          placeholder="+ Press enter after each guest's email"
          value={currentEmailAddress}
          autoComplete="email"
          type="email"
          onChange={(event): void => setCurrentEmailAddress(event.target.value)}
          onKeyPress={(event): void => {
            if (event.key === 'Enter') {
              isEmailValid(currentEmailAddress)
                ? handleValidEmailEntered()
                : setError('Invalid Email Address')
              event.preventDefault()
            } else {
              setError('')
            }
          }}
          helperText={error}
          error={!!error}
        />
        <ul className={styles.emailList}>
          {emailAddresses.map((email: string) => {
            return (
              <li
                className={styles.emailListItem}
                key={email}
                onClick={(): void => handleEmailDelete(email)}
              >
                {email}
                <button className={styles.closeIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5921 17.4079L6.27629 6.09209M17.5921 6.09209L6.27628 17.4079"
                      stroke="black"
                    />
                  </svg>
                </button>
              </li>
            )
          })}
        </ul>
      </form>
    </ThemeProvider>
  )
}
