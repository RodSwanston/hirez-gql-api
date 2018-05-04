import { GraphQLList } from 'graphql'
import { DEF_PLAYER_ARGS } from '../../utils/constants'
import { getPlayerStatus } from '../../hirez'
import { PlayerStatusType } from '../types'

const PlayerStatus = {
	type: PlayerStatusType,
	args: { ...DEF_PLAYER_ARGS },
	async resolve(_, args) {
		const status = await getPlayerStatus(args)
		return Array.isArray(status) ? status[0] : status
	}
}

const PlayersStatus = {
	type: new GraphQLList(PlayerStatusType),
	args: { ...DEF_PLAYER_ARGS },
	async resolve(_, args) {
		return await getPlayerStatus(args)
	}
}

export default {
	PlayerStatus,
	PlayersStatus
}
