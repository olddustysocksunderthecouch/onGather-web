import { createSelector } from 'reselect'
import { selectors as firebaseSelectors } from '../../common/modules/firebase'
import { selectors as firestoreSelectors } from '../../common/modules/firestore'
import { Gathering } from '../../common/types'

const arrayResult = (data: any): Gathering[] => {
  const array = Object.keys(data).map((id) => {
    return { gatheringId: id, ...data[id] }
  })
  return array.reduce(
    (accumulator: any, currentValue: Gathering): Gathering[] => {
      if (currentValue) {
        accumulator.push(currentValue)
      }
      return accumulator
    },
    [],
  )
}

const compareDate = (gatheringA: Gathering, gatheringB: Gathering): number => {
  return gatheringA.startTimestamp > gatheringB.startTimestamp ? 1 : -1
}

export const selectUpcomingGatheringsOrganizer = createSelector(
  firebaseSelectors.selectUid,
  firestoreSelectors.selectData,
  (uid: string | null, data: any): any => {
    if (uid && data.upcomingGatheringsOrganizer) {
      return arrayResult(data.upcomingGatheringsOrganizer)
    } else {
      return []
    }
  },
)

export const selectUpcomingGatheringsInvitee = createSelector(
  firebaseSelectors.selectUid,
  firestoreSelectors.selectData,
  (uid: string | null, data: any): any => {
    if (uid && data.upcomingGatheringsInvitee) {
      return arrayResult(data.upcomingGatheringsInvitee)
    } else {
      return []
    }
  },
)

export const selectPastGatheringsOrganizer = createSelector(
  firebaseSelectors.selectUid,
  firestoreSelectors.selectData,
  (uid: string | null, data: any): any => {
    if (uid && data.pastGatheringsOrganizer) {
      return arrayResult(data.pastGatheringsOrganizer)
    } else {
      return []
    }
  },
)

export const selectPastGatheringsInvitee = createSelector(
  firebaseSelectors.selectUid,
  firestoreSelectors.selectData,
  (uid: string | null, data: any): any => {
    if (uid && data.pastGatheringsInvitee) {
      return arrayResult(data.pastGatheringsInvitee)
    } else {
      return []
    }
  },
)

export const selectAllPastGatherings = createSelector(
  selectPastGatheringsOrganizer,
  selectPastGatheringsInvitee,
  (
    pastGatheringsOrganizer: Gathering[] | null,
    pastGatheringsInvitee: Gathering[] | null,
  ): any => {
    if (pastGatheringsOrganizer && pastGatheringsInvitee) {
      return pastGatheringsOrganizer
        .concat(pastGatheringsInvitee)
        .sort(compareDate)
    } else if (pastGatheringsOrganizer) {
      return pastGatheringsOrganizer
    } else if (pastGatheringsInvitee) {
      return pastGatheringsInvitee
    } else {
      return []
    }
  },
)

export const selectSelectedGathering = createSelector(
  firestoreSelectors.selectData,
  (data: any): any => {
    if (data.selectedGathering) {
      return data.selectedGathering
    } else {
      return {}
    }
  },
)
