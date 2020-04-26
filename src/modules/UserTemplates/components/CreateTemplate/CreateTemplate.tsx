import { grey } from '@material-ui/core/colors'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { categories } from '../../../../common/constants'
import { TemplateCreation } from '../../../../common/types'
import { Category, Duration } from '../../types'
import styles from './CreateTemplate.module.scss'

export interface Props {
  loading: string | null
  error: string | null
  handleTemplateDataChange: (template: TemplateCreation) => void
}

const durations: Duration[] = [
  { timeMinutes: '15', timeFormatted: '15 min' },
  { timeMinutes: '30', timeFormatted: '30 min' },
  { timeMinutes: '45', timeFormatted: '45 min' },
  { timeMinutes: '60', timeFormatted: '1 hr' },
  { timeMinutes: '75', timeFormatted: '1 hr 15min' },
  { timeMinutes: '90', timeFormatted: '1 hr 30min' },
  { timeMinutes: '120', timeFormatted: '2 hr' },
]

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
  typography: {
    fontFamily: 'Raleway',
  },
})

export const CreateTemplate: React.FunctionComponent<Props> = ({
  loading,
  error,
  handleTemplateDataChange,
}) => {
  const [categorySelected, setCategorySelected] = useState('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setCategorySelected(event.target.value as Category)
  }
  const [durationSelected, setDurationSelected] = useState('')
  const handleDurationChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    setDurationSelected(event.target.value as string)
  }

  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [mainAimsOutcomes, setMainAimsOutcomes] = useState('')
  const [hostInstructions, setHostInstructions] = useState('')
  const [invitationDescription, setInvitationDescription] = useState('')

  useEffect(() => {
    const templateData: TemplateCreation = {
      category: categorySelected,
      title,
      shortDescription,
      mainAimsOutcomes,
      suggestedDuration: durationSelected,
      imageUrl: '',
      hostInstructions,
      invitationDescription,
    }

    handleTemplateDataChange(templateData)
  }, [
    categorySelected,
    title,
    shortDescription,
    mainAimsOutcomes,
    durationSelected,
    hostInstructions,
    invitationDescription,
  ])

  return (
    <div className={styles.createTemplate}>
      <h1>Template Creator</h1>
      <p>
        Some text explaining some things. Sometimes it explains even more things
        about things that you’ve never heard of.
      </p>
      <ThemeProvider theme={theme}>
        <FormControl
          style={{ marginTop: '36px', width: '300px' }}
          variant="outlined"
        >
          <InputLabel>Category</InputLabel>
          <Select
            value={categorySelected}
            onChange={handleChange}
            label="Category"
          >
            {categories.map((category: string) => {
              return (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <form className={styles.form} noValidate autoComplete="on">
          <TextField
            style={{ marginTop: '16px', width: '300px' }}
            label="Title"
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setTitle(event.target.value)
            }}
          />
          <TextField
            style={{ marginTop: '16px' }}
            label="Short Description"
            variant="outlined"
            rows="2"
            fullWidth
            multiline
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setShortDescription(event.target.value)
            }}
          />
          <TextField
            style={{ marginTop: '16px' }}
            id="outlined-basic"
            label="Main Aims & Outcomes"
            variant="outlined"
            fullWidth
            helperText="Put commas between each item"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setMainAimsOutcomes(event.target.value)
            }}
          />
        </form>
        <FormControl
          style={{ marginTop: '16px', width: '300px' }}
          variant="outlined"
        >
          <InputLabel>Suggested Duration</InputLabel>
          <Select
            value={durationSelected}
            onChange={handleDurationChange}
            label="Suggested Duration"
          >
            {durations.map((duration: Duration) => {
              return (
                <MenuItem
                  key={duration.timeMinutes}
                  value={duration.timeMinutes}
                >
                  {duration.timeFormatted}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <form className={styles.form} noValidate autoComplete="on">
          <button className={styles.uploadButton}>Upload Image</button>
          <h2>Instructions for the host</h2>
          <p>
            e.g. hosting guide, tools they could use, interaction guidelines,
            specific preparation they need to do
          </p>
          <TextField
            style={{ marginTop: '16px' }}
            id="outlined-basic"
            label="Host Instructions"
            variant="outlined"
            rows="4"
            fullWidth
            multiline
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setHostInstructions(event.target.value)
            }}
          />
          <h2>Invitation Description</h2>
          <p>
            This description will be added to the google calendar invite which
            will be sent guests
          </p>
          <TextField
            style={{ marginTop: '16px' }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            rows="4"
            fullWidth
            multiline
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setInvitationDescription(event.target.value)
            }}
          />
        </form>
      </ThemeProvider>
      {loading && (
        <div className={styles.loading}>
          <p>{loading}</p>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  )
}
