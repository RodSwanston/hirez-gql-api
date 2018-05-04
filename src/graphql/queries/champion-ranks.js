import { GraphQLList } from 'graphql'
import { DEF_PLAYER_ARGS } from '../../utils/constants'
import { getChampionRanks } from '../../hirez'
import { ChampionRankType } from '../types'

const ChampionsRank = {
	type: new GraphQLList(ChampionRankType),
	args: { ...DEF_PLAYER_ARGS },
	async resolve(_, args) {
		return await getChampionRanks(args)
	}
}

export default {
	ChampionsRank
}
