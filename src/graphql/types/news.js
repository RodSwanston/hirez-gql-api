import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} from 'graphql'

const newsBase = {
	author: { type: GraphQLString },
	featured_image: { type: GraphQLString },
	id: { type: GraphQLInt },
	real_categories: { type: GraphQLString },
	timestamp: { type: GraphQLString },
	title: { type: GraphQLString }
}

export const NewsType = new GraphQLObjectType({
	name: 'NewsType',
	fields: () => ({
		...newsBase,
		slug: { type: GraphQLString }
	})
})

export const NewsDetailType = new GraphQLObjectType({
	name: 'NewsDetailType',
	fields: () => ({
		...newsBase,
		content: { type: GraphQLString },
	})
})
