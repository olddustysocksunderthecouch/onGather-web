import React from 'react'
import { create } from 'react-test-renderer'
import { UpdateGatheringStatus } from '../../types'
import { UpdatingSuccessErrorModal } from './UpdatingSuccessErrorModal'

describe('CreatingSuccessErrorModal Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <UpdatingSuccessErrorModal
        handleCloseModalClicked={(): void => undefined}
        updateGatheringStatus={UpdateGatheringStatus.Success}
      />,
    )
    expect(instance.root.type).toBe(UpdatingSuccessErrorModal)
  })
})
