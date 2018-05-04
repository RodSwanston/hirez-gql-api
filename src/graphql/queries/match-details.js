import { GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql'
import { DEF_ARGS } from '../../utils/constants'
import { getMatchDetails } from '../../hirez'
import { MatchDetailsType, GroupMatchDetailsType } from '../types'

const MATCH_ARGS = {
	...DEF_ARGS,
	matchId: {
		name: 'matchId',
		type: new GraphQLNonNull(GraphQLInt)
	}
}

const MatchDetails = {
	type: new GraphQLList(MatchDetailsType),
	args: { ...MATCH_ARGS },
	async resolve(_, args) {
		return await getMatchDetails(args)
	}
}

const GroupMatchDetails = {
	type: GroupMatchDetailsType,
	args: { ...MATCH_ARGS },
	async resolve(_, args) {
		return await getMatchDetails(args)
	}
}

export default {
	MatchDetails,
	GroupMatchDetails
}
