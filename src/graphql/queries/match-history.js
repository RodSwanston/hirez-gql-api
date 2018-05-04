import { GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString } from 'graphql'
import { DEF_PLAYER_ARGS, DEF_ARGS } from '../../utils/constants'
import { getMatchHistory, getMatchidsByQueue } from '../../hirez'
import { MatchHistoryType, MatchIdsType } from '../types'

const MatchHistory = {
	type: new GraphQLList(MatchHistoryType),
	args: { ...DEF_PLAYER_ARGS },
	async resolve(_, args) {
		return await getMatchHistory(args)
	}
}

const MatchidsByQueue = {
	type: new GraphQLList(MatchIdsType),
	args: {
		...DEF_ARGS,
		queue: {
			name: 'queue',
			description: 'Match type',
			type: new GraphQLNonNull(GraphQLInt)
		},
		date: {
			name: 'date',
			description: 'date -> month-day-year',
			type: new GraphQLNonNull(GraphQLString)
		},
		hour: {
			name: 'hour',
			description: 'valid values: -1 -> 23, minutes of hour, you would specify {hour} as "3,00", valid values: 00, 10, 20, 30, 40, 50',
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	async resolve(_, args) {
		return await getMatchidsByQueue(args)
	}
}

export default {
	MatchHistory,
	MatchidsByQueue
}
