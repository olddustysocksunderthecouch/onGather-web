import React from 'react'
import { GuestList, Props } from './GuestList'

export default {
  title: 'Components/Gatherings/GuestList',
  component: GuestList,
}
export const defaultState = (): React.FunctionComponentElement<Props> => (
  <GuestList emails={[]} />
)

defaultState.story = {
  name: 'default',
}
