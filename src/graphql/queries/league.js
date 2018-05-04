import { GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql'
import { DEF_ARGS } from '../../utils/constants'
import { getLeagueLeaderboard, getLeagueSeasons } from '../../hirez'
import { LeagueLeaderboardType, LeagueSeasonType } from '../types'

const LeagueLeaderboard = {
	type: new GraphQLList(LeagueLeaderboardType),
	args: {
		...DEF_ARGS,
		queue: {
			name: 'queue',
			description: 'Match type',
			type: new GraphQLNonNull(GraphQLInt)
		},
		tier: {
			name: 'tier',
			description: 'Player tier (1 = Bronze V...)',
			type: new GraphQLNonNull(GraphQLInt)
		},
		season: {
			name: 'season',
			description: 'Game season',
			type: new GraphQLNonNull(GraphQLInt)
		}
	},
	async resolve(_, args) {
		return await getLeagueLeaderboard(args)
	}
}

const LeagueSeasons = {
	type: new GraphQLList(LeagueSeasonType),
	args: {
		...DEF_ARGS,
		queue: {
			name: 'queue',
			description: 'Match type',
			type: new GraphQLNonNull(GraphQLInt)
		}
	},
	async resolve(_, args) {
		return await getLeagueSeasons(args)
	}
}

export default {
	LeagueLeaderboard,
	LeagueSeasons
}
