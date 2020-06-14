import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { AnyAction } from 'redux'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { sendCode } from '../Auth.actions'
import { selectors } from './../index'

const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search)
}

interface Props extends ConnectedReduxProps<AnyAction> {
  templateId: string
  handleCode: (code: string) => void
}

const AuthRedirectContainer = ({
  templateId,
  handleCode,
}: Props): React.ReactElement => {
  const code = useQuery().get('code')
  const history = useHistory()

  useEffect(() => {
    if (code) {
      handleCode(code!)
      history.push(`/edit-send-invites/${templateId}`)
    }
  }, [code])

  return <div />
}

const mapStateToProps = (state: RootState): any => ({
  templateId: selectors.selectEditSendTemplateId(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleCode: (code: string): void => dispatch(sendCode(code)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthRedirectContainer)
