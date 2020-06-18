import React from 'react'
import { create } from 'react-test-renderer'
import { CreateGatheringStatus } from '../../types'
import { CreatingSuccessErrorModal } from './CreatingSuccessErrorModal'

describe('CreatingSuccessErrorModal Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <CreatingSuccessErrorModal
        handleCloseModalClicked={(): void => undefined}
        createGatheringStatus={CreateGatheringStatus.Success}
      />,
    )
    expect(instance.root.type).toBe(CreatingSuccessErrorModal)
  })
})
