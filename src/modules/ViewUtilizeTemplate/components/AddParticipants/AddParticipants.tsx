import {
  Chip,
  createMuiTheme,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import InputAdornment from '@material-ui/core/InputAdornment'
import classes from 'classnames'
import React, { useEffect, useState } from 'react'
import { isEmailValid } from '../../../../common/utils'
import styles from './AddParticipants.module.scss'

export interface Props {
  value?: string[]
  defaultValue?: string[]
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
  defaultValue,
  error = false,
}) => {
  const [emailAddresses, setEmailAddresses] = useState<string[]>(value)
  const [currentEmailAddress, setCurrentEmailAddress] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    if (defaultValue) {
      setEmailAddresses(defaultValue)
    }
  }, [defaultValue])

  const handleValidEmailEntered = (): void => {
    if (!emailAddresses.includes(currentEmailAddress)) {
      setEmailAddresses([currentEmailAddress, ...emailAddresses])
      onChange([currentEmailAddress, ...emailAddresses])
      setCurrentEmailAddress('')
      setInputError('')
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
          placeholder="Guest's email"
          value={currentEmailAddress}
          autoComplete="email"
          type="email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  onClick={(event): void => {
                    isEmailValid(currentEmailAddress)
                      ? handleValidEmailEntered()
                      : setInputError('Invalid Email Address')
                    return event.preventDefault()
                  }}
                  className={styles.addButton}
                >
                  + ADD
                </button>
              </InputAdornment>
            ),
          }}
          onChange={(event): void => setCurrentEmailAddress(event.target.value)}
          onKeyPress={(event): void => {
            if (event.key === 'Enter') {
              event.preventDefault()
              isEmailValid(currentEmailAddress)
                ? handleValidEmailEntered()
                : setInputError('Invalid Email Address')
            } else {
              setInputError('')
            }
          }}
          helperText={inputError || 'Press ADD or ENTER after each email'}
          error={!!inputError}
        />
        <ul className={styles.emailList}>
          {emailAddresses.length === 0 ? (
            <p>No guests invited so far</p>
          ) : (
            emailAddresses.map((email: string) => {
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
            })
          )}
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
