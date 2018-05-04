import { GraphQLList, GraphQLInt } from 'graphql'
import { DEF_PLAYER_ARGS } from '../../utils/constants'
import { getQueueStats } from '../../hirez'
import { QueueStatsType } from '../types'

const QueueStats = {
	type: new GraphQLList(QueueStatsType),
	args: {
		...DEF_PLAYER_ARGS,
		queue: {
			name: 'queue',
			type: GraphQLInt
		}
	},
	async resolve(_, args) {
		return await getQueueStats(args)
	}
}

export default {
	QueueStats
}
