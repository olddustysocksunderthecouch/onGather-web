import {
  Chip,
  createMuiTheme,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import classes from 'classnames'
import React, { useState } from 'react'
import { isEmailValid } from '../../../../common/utils'
import styles from './AddParticipants.module.scss'

export interface Props {
  value?: string[]
  onChange: (emailsEntered: string[]) => void
  error?: boolean
}

const theme = createMuiTheme({
  palette: { primary: grey },
  typography: { fontFamily: 'Raleway' },
})

export const AddParticipants: React.FunctionComponent<Props> = ({
  onChange,
  value = [],
  error = false,
}) => {
  const [emailAddresses, setEmailAddresses] = useState<string[]>(value)
  const [currentEmailAddress, setCurrentEmailAddress] = useState('')
  const [inputError, setInputError] = useState('')

  const handleValidEmailEntered = (): void => {
    if (!emailAddresses.includes(currentEmailAddress)) {
      setEmailAddresses([currentEmailAddress, ...emailAddresses])
      onChange([currentEmailAddress, ...emailAddresses])
      setCurrentEmailAddress('')
    } else {
      setInputError("You've already entered this email address")
    }
  }
  const handleEmailDelete = (emailToDelete: string): void => {
    const newState = emailAddresses.filter((item) => item !== emailToDelete)
    setEmailAddresses(newState)
    onChange(newState)
  }

  const containerStyles = (): object => {
    return {
      [styles.containerStyle]: true,
      [styles.containerStyleError]: error,
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <div className={classes(containerStyles())}>
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
                : setInputError('Invalid Email Address')
              event.preventDefault()
            } else {
              setInputError('')
            }
          }}
          helperText={inputError}
          error={!!inputError}
        />
        <ul className={styles.emailList}>
          {emailAddresses.map((email: string) => {
            return (
              <li key={email}>
                <Chip
                  key={email}
                  label={email}
                  style={{ marginRight: '4px', lineHeight: '1rem' }}
                  onDelete={(): void => handleEmailDelete(email)}
                />
              </li>
            )
          })}
        </ul>
      </div>
      {error && (
        <div className={styles.errorText}>
          Please enter at least one email of someone that you&apos;d like to
          invite
        </div>
      )}
    </ThemeProvider>
  )
}
