import { gql } from 'apollo-server-express'
import { getPlayerStatus } from '../hirez'

export const PlayerStatusType = gql`
	type PlayerStatus {
		Match: Int
		status: Int
		personal_status_message: String
		status_string: String
		ret_msg: String
	}

	extend type Query {
    playerStatus(player: String!, type: gameType, platform: platform): PlayerStatus
    playersStatus(player: String!, type: gameType, platform: platform): [PlayerStatus]
  }
`

export const PlayerStatusResolvers = {
	Query: {
		async playerStatus(_, args) {
			const status = await getPlayerStatus(args)
			return Array.isArray(status) ? status[0] : status
		},
		async playersStatus(_, args) {
			await getPlayerStatus(args)
		}
	}
}
