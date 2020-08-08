import React from 'react'
import { CreateNewTemplate } from '../../../../common/components/CreateNewTemplate'
import { Gathering } from '../../../../common/types'
import { GatheringPreview } from '../GatheringPreview/GatheringPreview'
import styles from './Gatherings.module.scss'

export interface Props {
  upcomingGatheringsOrganizer: Gathering[]
  upcomingGatheringsInvitee: Gathering[]
  allPastGatherings: Gathering[]
  handleTemplateClicked: (templateId: string, type: string) => void
  handleCreateNewTemplateClicked: () => void
}

export const Gatherings: React.FunctionComponent<Props> = ({
  upcomingGatheringsOrganizer,
  upcomingGatheringsInvitee,
  allPastGatherings,
  handleTemplateClicked,
  handleCreateNewTemplateClicked,
}) => {
  console.log('upcomingGatherings', upcomingGatheringsOrganizer)

  return (
    <div className={styles.container}>
      <h1>Your Gatherings</h1>
      <section>
        <h2>Upcoming</h2>
        <h3>Hosted by you</h3>
        <div className={styles.templatePreviews}>
          {upcomingGatheringsOrganizer.length < 1 ? (
            <CreateNewTemplate
              handleCreateNewClick={handleCreateNewTemplateClicked}
            />
          ) : (
            upcomingGatheringsOrganizer.map((gathering: Gathering) => {
              return (
                <GatheringPreview
                  key={gathering.gatheringId}
                  gathering={gathering}
                  handleGatheringPreviewClicked={(templateId: string): void =>
                    handleTemplateClicked(templateId, 'userDrafts')
                  }
                />
              )
            })
          )}
        </div>
      </section>
      <section>
        <h3>You&apos;re invited!</h3>
        {upcomingGatheringsInvitee.map((gathering: Gathering) => {
          return (
            <GatheringPreview
              key={gathering.gatheringId}
              gathering={gathering}
              handleGatheringPreviewClicked={(templateId: string): void =>
                handleTemplateClicked(templateId, 'userDrafts')
              }
            />
          )
        })}
      </section>

      <section>
        <h2>In the Past</h2>
        {allPastGatherings.map((gathering: Gathering) => {
          return (
            <GatheringPreview
              key={gathering.gatheringId}
              gathering={gathering}
              handleGatheringPreviewClicked={(templateId: string): void =>
                handleTemplateClicked(templateId, 'userDrafts')
              }
            />
          )
        })}
      </section>
    </div>
  )
}
