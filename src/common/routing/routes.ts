import { AppActions } from '../../modules/App/types'
import { BottomNavActions } from '../modules/BottomNav/types'

export const actionRouteMap = {
  [AppActions.StartedOnboarding]: '/onboarding',
  [AppActions.Onboarded]: '/',
  [BottomNavActions.NavigateToSearch]: '/home',
  [BottomNavActions.NavigateToProfile]: '/select-template',
}
