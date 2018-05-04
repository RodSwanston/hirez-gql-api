import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql'

export const PatchInfoType = new GraphQLObjectType({
	name: 'PatchInfoType',
	fields: () => ({
		version_string: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})
