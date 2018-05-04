import { GraphQLList } from 'graphql'
import { DEF_PLAYER_ARGS } from '../../utils/constants'
import { getFriends } from '../../hirez'
import { FriendType } from '../types'

const Friends = {
	type: new GraphQLList(FriendType),
	args: { ...DEF_PLAYER_ARGS },
	async resolve(_, args) {
		return await getFriends(args)
	}
}

export default {
	Friends
}
