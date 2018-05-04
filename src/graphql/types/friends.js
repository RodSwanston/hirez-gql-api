import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql'

export const FriendType = new GraphQLObjectType({
	name: 'FriendType',
	fields: () => ({
		account_id: { type: GraphQLString },
		name: { type: GraphQLString },
		player_id: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})

