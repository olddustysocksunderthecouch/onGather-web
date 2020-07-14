import {
  Chip,
  createMuiTheme,
  InputAdornment,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import classes from 'classnames'
import React, { useState } from 'react'
import styles from './AddMainAimsOutcomes.module.scss'

export interface Props {
  value?: string[]
  onChange: (mainAimsOutcomesEntered: string[]) => void
  error?: boolean
}

const theme = createMuiTheme({
  palette: { primary: grey },
  typography: { fontFamily: 'Raleway' },
})

export const AddMainAimsOutcomes: React.FunctionComponent<Props> = ({
  onChange,
  value = [],
  error = false,
}) => {
  const [mainAimsOutcomes, setMainAimsOutcomes] = useState<string[]>(value)
  const [currentMainAimOutcome, setCurrentMainAimOutcome] = useState('')
  const [inputError, setInputError] = useState('')

  const handleValidMainAimOutcomeEntered = (): void => {
    if (!mainAimsOutcomes.includes(currentMainAimOutcome)) {
      setMainAimsOutcomes([currentMainAimOutcome, ...mainAimsOutcomes])
      onChange([currentMainAimOutcome, ...mainAimsOutcomes])
      setCurrentMainAimOutcome('')
      setInputError('')
    } else {
      setInputError("You've already entered this main aim / outcome")
    }
  }
  const handleMainAimOutcomeDelete = (mainAimOutcomeToDelete: string): void => {
    const newState = mainAimsOutcomes.filter(
      (item) => item !== mainAimOutcomeToDelete,
    )
    setMainAimsOutcomes(newState)
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
          variant="standard"
          placeholder="+ Press ADD or enter after each main aim or outcome"
          value={currentMainAimOutcome}
          onChange={(event): void =>
            setCurrentMainAimOutcome(event.target.value)
          }
          onKeyPress={(event): void => {
            if (event.key === 'Enter') {
              currentMainAimOutcome.length > 1
                ? handleValidMainAimOutcomeEntered()
                : setInputError('Invalid aim / outcome')
              event.preventDefault()
            } else {
              setInputError('')
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  onClick={(event): void => {
                    currentMainAimOutcome.length > 1
                      ? handleValidMainAimOutcomeEntered()
                      : setInputError('Invalid aim / outcome')
                    return event.preventDefault()
                  }}
                  className={styles.addButton}
                >
                  + ADD
                </button>
              </InputAdornment>
            ),
          }}
          helperText={inputError || 'Press ADD or ENTER'}
          error={!!inputError}
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
      </div>
      {error && (
        <div className={styles.errorTextAims}>
          Please enter at least 2 main aims or outcomes
        </div>
      )}
    </ThemeProvider>
  )
}
