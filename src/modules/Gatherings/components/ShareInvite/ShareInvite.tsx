import {
  Chip,
  createMuiTheme,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import { grey, orange } from '@material-ui/core/colors'
import InputAdornment from '@material-ui/core/InputAdornment'
import React, { useEffect, useState, Fragment } from 'react'
import { isEmailValid } from '../../../../common/utils'
import styles from './ShareInvite.module.scss'
import CloseIcon from './../../../../common/assets/close-icon.svg'

export interface Props {
  value?: string[]
  invitedGuestEmails: string[]
  handleCloseModalClicked: () => void
  handleUpdateInvitees: (emailsEntered: string[]) => void
  onChange: (emailsEntered: string[]) => void
  error?: boolean
}

const theme = createMuiTheme({
  palette: { primary: grey, secondary: orange },
  typography: { fontFamily: 'Raleway' },
})

export const ShareInvite: React.FunctionComponent<Props> = ({
  onChange,
  handleUpdateInvitees,
  value = [],
  error = false,
  invitedGuestEmails,
  handleCloseModalClicked,
}) => {
  const [emailAddresses, setEmailAddresses] = useState<string[]>(value)
  const [currentEmailAddress, setCurrentEmailAddress] = useState('')
  const [inputError, setInputError] = useState('')
  const [emailInputIsVisible, setEmailInputIsVisible] = useState(false)

  useEffect(() => {
    if (invitedGuestEmails) {
      setEmailAddresses(invitedGuestEmails)
    }
  }, [invitedGuestEmails])

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

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <h5>Sharing & Invite</h5>
        <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>

        <p>Invite friend by sending them the link</p>

        <TextField
          style={{ marginTop: '16px', marginBottom: '16px' }}
          fullWidth
          label="Sharable Link"
          name="email"
          variant="filled"
          size="small"
          value={'http://localhost:3000/gathering/N53qOdZDS7vfTnv9GuOF'}
        />

        <h6>OR</h6>

        {!emailInputIsVisible && (
          <button onClick={(): void => setEmailInputIsVisible(true)}>
            Invite via email
          </button>
        )}

        {emailInputIsVisible && (
          <Fragment>
            <TextField
              style={{ marginTop: '16px' }}
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
              onChange={(event): void =>
                setCurrentEmailAddress(event.target.value)
              }
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
                <p className={styles.noGuests}>No guests invited so far</p>
              ) : (
                emailAddresses.map((email: string) => {
                  return (
                    <li key={email}>
                      <Chip
                        key={email}
                        label={email}
                        style={{
                          marginRight: '4px',
                          marginTop: '4px',
                          lineHeight: '1rem',
                        }}
                        onDelete={(): void => handleEmailDelete(email)}
                      />
                    </li>
                  )
                })
              )}
            </ul>
            <button
              onClick={(): void =>
                handleUpdateInvitees(
                  isEmailValid(currentEmailAddress)
                    ? [currentEmailAddress, ...emailAddresses]
                    : emailAddresses,
                )
              }
            >
              Send Invites / Updates
            </button>
          </Fragment>
        )}
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
