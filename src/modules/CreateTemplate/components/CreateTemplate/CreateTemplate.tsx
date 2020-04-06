import { grey } from '@material-ui/core/colors'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { Duration } from '../../types'
import styles from './CreateTemplate.module.scss'

export interface Props {
  dummyText: string
}
const categories: string[] = [
  'Popular',
  'Book Club',
  'Meditation',
  'Games',
  'Craft',
  'Workout',
  'Discussion',
]

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
  dummyText,
}) => {
  const [categorySelected, setCategorySelected] = useState('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setCategorySelected(event.target.value as string)
  }
  const [durationSelected, setDurationSelected] = useState('')
  const handleDurationChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    setDurationSelected(event.target.value as string)
  }

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
          />
          <TextField
            style={{ marginTop: '16px' }}
            label="Short Description"
            variant="outlined"
            rows="2"
            fullWidth
            multiline
          />
          <TextField
            style={{ marginTop: '16px' }}
            id="outlined-basic"
            label="Main Aims & Outcomes"
            variant="outlined"
            fullWidth
            helperText="Put commas between each item"
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
          />
        </form>
      </ThemeProvider>
    </div>
  )
}
