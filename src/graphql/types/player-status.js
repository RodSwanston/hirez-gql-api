import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} from 'graphql'

export const PlayerStatusType = new GraphQLObjectType({
	name: 'PlayerStatusType',
	fields: () => ({
		Match: { type: GraphQLInt },
		status: { type: GraphQLInt },
		personal_status_message: { type: GraphQLString },
		status_string: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})
