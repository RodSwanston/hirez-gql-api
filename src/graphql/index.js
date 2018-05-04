import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql'
import queries from './queries'
// import types from './types'

export default new GraphQLSchema({
	// types: [...types],
	query: new GraphQLObjectType({
			name: 'Query',
			fields: queries
	})
})
