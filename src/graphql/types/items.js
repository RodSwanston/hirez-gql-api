import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} from 'graphql'

export const ItemType = new GraphQLObjectType({
	name: 'ItemType',
	fields: () => ({
		Description: { type: GraphQLString },
		DeviceName: { type: GraphQLString },
		IconId: { type: GraphQLInt },
		ItemId: { type: GraphQLInt },
		Price: { type: GraphQLInt },
		ShortDesc: { type: GraphQLString },
		champion_id: { type: GraphQLInt },
		itemIcon_URL: { type: GraphQLString },
		item_type: { type: GraphQLString },
		talent_reward_level: { type: GraphQLInt },
		ret_msg: { type: GraphQLString }
	})
})
