import { GraphQLList } from 'graphql'
import { DEF_ARGS } from '../../utils/constants'
import { getEsportsProLeagueDetails } from '../../hirez'
import { EsportMatchType } from '../types'

const EsportsProLeagueDetails = {
	type: new GraphQLList(EsportMatchType),
	args: { ...DEF_ARGS },
	async resolve(_, args) {
		return await getEsportsProLeagueDetails(args)
	}
}

export default {
	EsportsProLeagueDetails
}
