import '@storybook/addon-console'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
