import {
  Chip,
  createMuiTheme,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React, { useState } from 'react'
import styles from './AddMainAimsOutcomes.module.scss'

export interface Props {
  value?: string[]
  onChange: (handleEmailsEntered: string[]) => void
}

const theme = createMuiTheme({
  palette: { primary: grey },
  typography: { fontFamily: 'Raleway' },
})

export const AddMainAimsOutcomes: React.FunctionComponent<Props> = ({
  onChange,
  value = [],
}) => {
  const [mainAimsOutcomes, setMainAimsOutcomes] = useState<string[]>(value)
  const [currentMainAimOutcome, setCurrentMainAimOutcome] = useState('')
  const [error, setError] = useState('')

  const handleValidMainAimOutcomeEntered = (): void => {
    if (!mainAimsOutcomes.includes(currentMainAimOutcome)) {
      setMainAimsOutcomes([currentMainAimOutcome, ...mainAimsOutcomes])
      onChange([currentMainAimOutcome, ...mainAimsOutcomes])
      setCurrentMainAimOutcome('')
    } else {
      setError("You've already entered this email address")
    }
  }
  const handleMainAimOutcomeDelete = (mainAimOutcomeToDelete: string): void => {
    const newState = mainAimsOutcomes.filter(
      (item) => item !== mainAimOutcomeToDelete,
    )
    setMainAimsOutcomes(newState)
    onChange(newState)
  }

  return (
    <ThemeProvider theme={theme}>
      <form className={styles.addMainAimsOutcomesContainer}>
        <TextField
          style={{ marginTop: '0px' }}
          fullWidth
          variant="standard"
          placeholder="+ Press enter after each main aim or outcome"
          value={currentMainAimOutcome}
          autoComplete="email"
          onChange={(event): void =>
            setCurrentMainAimOutcome(event.target.value)
          }
          onKeyPress={(event): void => {
            if (event.key === 'Enter') {
              currentMainAimOutcome.length > 1
                ? handleValidMainAimOutcomeEntered()
                : setError('Invalid aim / outcome')
              event.preventDefault()
            } else {
              setError('')
            }
          }}
          helperText={error}
          error={!!error}
        />
        <ul className={styles.mainAimOutcomeList}>
          {mainAimsOutcomes.map((mainAimOutcome: string) => {
            return (
              <li key={mainAimOutcome}>
                <Chip
                  key={mainAimOutcome}
                  label={mainAimOutcome}
                  style={{ marginRight: '4px', lineHeight: '1rem' }}
                  onDelete={(): void =>
                    handleMainAimOutcomeDelete(mainAimOutcome)
                  }
                />
              </li>
            )
          })}
        </ul>
      </form>
    </ThemeProvider>
  )
}
