import { GraphQLList, GraphQLInt, GraphQLNonNull } from 'graphql'
import { DEF_LANG_ARGS } from '../../utils/constants'
import { getItems } from '../../hirez'
import { ItemType } from '../types'

const Items = {
	type: new GraphQLList(ItemType),
	args: { ...DEF_LANG_ARGS },
	async resolve(_, args) {
		return await getItems(args)
	}
}

const ChampionItems = {
	type: new GraphQLList(ItemType),
	args: {
		...DEF_LANG_ARGS,
		championId: {
			name: 'championId',
			type: new GraphQLNonNull(GraphQLInt)
		}
	},
	async resolve(_, args) {
		return await getItems(args)
	}
}

export default {
	Items,
	ChampionItems
}
