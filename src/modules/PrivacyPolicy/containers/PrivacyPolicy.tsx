import React from 'react'
import { connect } from 'react-redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { PrivacyPolicy } from '../components/PrivacyPolicy'
import { TopNavType } from '../../../common/modules/TopNav/types'

const PrivacyPolicyContainer = (): React.ReactElement => (
  <TopNavLayout topNavType={TopNavType.Home}>
    <PrivacyPolicy />
  </TopNavLayout>
)

export default connect(null, null)(PrivacyPolicyContainer)
