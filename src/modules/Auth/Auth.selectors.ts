import { createSelector } from 'reselect'
import { selectIsAuthenticated } from '../../common/modules/firebase/Firebase.selectors'
import { RootState } from '../../common/redux/types'
import { GatheringDraft } from '../../common/types'
import { AuthState, CalendarEventScopeStatus } from './types'

export const selectAuth = (state: RootState): AuthState => state.auth

export const selectCalendarEventScopeStatus = createSelector(
  selectAuth,
  (auth: AuthState): CalendarEventScopeStatus => auth.calendarEventScopeStatus,
)

export const selectGatheringDraft = createSelector(
  selectAuth,
  (auth: AuthState): GatheringDraft => auth.gatheringDraft,
)

export const selectDraftGatheringTemplateId = createSelector(
  selectGatheringDraft,
  (gatheringDraft: GatheringDraft): string => gatheringDraft.templateId,
)

export const selectShouldFetchScope = createSelector(
  selectIsAuthenticated,
  selectCalendarEventScopeStatus,
  (
    isAuthenticated: boolean,
    calendarEventScopeStatus: CalendarEventScopeStatus,
  ): boolean =>
    isAuthenticated &&
    (calendarEventScopeStatus === CalendarEventScopeStatus.NotFetched ||
      calendarEventScopeStatus === CalendarEventScopeStatus.FetchedNotGranted),
)

export const selectCalendarEventScopeIsGranted = createSelector(
  selectCalendarEventScopeStatus,
  (calendarEventScopeStatus: CalendarEventScopeStatus): boolean =>
    calendarEventScopeStatus === CalendarEventScopeStatus.FetchedIsGranted ||
    calendarEventScopeStatus === CalendarEventScopeStatus.RequestIsGranted,
)
