import React from 'react'
import { connect } from 'react-redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { PrivacyPolicy } from '../components/PrivacyPolicy'

const PrivacyPolicyContainer = (): React.ReactElement => (
  <TopNavLayout>
    <PrivacyPolicy />
  </TopNavLayout>
)

export default connect(null, null)(PrivacyPolicyContainer)
