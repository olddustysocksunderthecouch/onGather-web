import { AppActions } from '../../modules/App/types'
import { TopNavActions } from '../modules/TopNav/types'

export const actionRouteMap = {
  [AppActions.StartedOnboarding]: '/onboarding',
  [AppActions.Onboarded]: '/',
  [TopNavActions.NavigateToCreateTemplate]: '/Create-Template',
  [TopNavActions.NavigateToHome]: '/',
}
