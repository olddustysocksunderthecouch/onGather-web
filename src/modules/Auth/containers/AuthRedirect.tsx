import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { AnyAction } from 'redux'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { requestScopeError, sendCode } from '../Auth.actions'
import { selectors } from './../index'

const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search)
}

interface Props extends ConnectedReduxProps<AnyAction> {
  templateId: string
  handleCode: (code: string) => void
  handleError: (error: string) => void
}

const AuthRedirectContainer = ({
  templateId,
  handleCode,
  handleError,
}: Props): React.ReactElement => {
  const code = useQuery().get('code')
  const error = useQuery().get('error')
  const history = useHistory()

  useEffect(() => {
    if (code) {
      handleCode(code!)
      history.push(`/edit-send-invites/${templateId}?fromState=true`)
    } else {
      handleError(error!)
      history.push(`/edit-send-invites/${templateId}?fromState=true`)
    }
  }, [handleCode, code, handleError, error, history, templateId])

  return <div />
}

const mapStateToProps = (state: RootState): any => ({
  templateId: selectors.selectDraftGatheringTemplateId(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleCode: (code: string): void => dispatch(sendCode(code)),
  handleError: (error: string): void => dispatch(requestScopeError(error)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthRedirectContainer)
