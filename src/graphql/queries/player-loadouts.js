import { GraphQLList } from 'graphql'
import { DEF_PLAYER_ARGS, LANG_ARGS } from '../../utils/constants'
import { getPlayerLoadouts } from '../../hirez'
import { PlayerLoadoutType } from '../types'

const PlayerLoadouts = {
	type: new GraphQLList(PlayerLoadoutType),
	args: {
		...DEF_PLAYER_ARGS,
		...LANG_ARGS
	},
	async resolve(_, args) {
		return await getPlayerLoadouts(args)
	}
}

export default {
	PlayerLoadouts
}
