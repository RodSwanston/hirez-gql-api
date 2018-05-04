import { GraphQLList, GraphQLInt, GraphQLNonNull } from 'graphql'
import { PLATFORM_ARGS, LANG_ARGS } from '../../utils/constants'
import { getChampions, getChampionSkins } from '../../hirez'
import { ChampionType, ChampionSkinsType } from '../types'

const Champions = {
	type: new GraphQLList(ChampionType),
	args: {
		...LANG_ARGS,
		...PLATFORM_ARGS
	},
	async resolve(_, args) {
		return await getChampions(args)
	}
}

const ChampionSkins = {
	type: new GraphQLList(ChampionSkinsType),
	args: {
		...LANG_ARGS,
		...PLATFORM_ARGS,
		championId: {
			name: 'championId',
			type: new GraphQLNonNull(GraphQLInt)
		}
	},
	async resolve(_, args) {
		return await getChampionSkins(args)
	}
}

export default {
	Champions,
	ChampionSkins
}
