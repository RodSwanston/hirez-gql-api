import { GraphQLList } from 'graphql'
import { DEF_PLAYER_ARGS } from '../../utils/constants'
import { getPlayer } from '../../hirez'
import { PlayerType } from '../types'

const Player = {
	type: PlayerType,
	args: { ...DEF_PLAYER_ARGS },
	async resolve(_, args) {
		const player = await getPlayer(args)
		return Array.isArray(player) ? player[0] : player
	}
}

const Players = {
	type: new GraphQLList(PlayerType),
	args: { ...DEF_PLAYER_ARGS },
	async resolve(_, args) {
		return await getPlayer(args)
	}
}

export default {
	Player,
	Players
}
