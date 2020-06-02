import '@storybook/addon-console'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'
import '!style-loader!css-loader!sass-loader!./../src/common/styles/reset.scss'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
