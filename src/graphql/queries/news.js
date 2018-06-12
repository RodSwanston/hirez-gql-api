import {
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull
} from 'graphql'
import { getNews, getNewsDetails } from '../../hirez'
import { NewsType, NewsDetailType } from '../types'

const News = {
	type: new GraphQLList(NewsType),
	args: {
		page: {
			name: 'page',
			type: GraphQLInt
		},
		offset: {
			name: 'offset',
			type: GraphQLInt
		}
	},
	async resolve(_, args) {
		return await getNews(args)
	}
}

const NewsDetail = {
	type: NewsDetailType,
	args: {
		slug: {
			name: 'slug',
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	async resolve(_, args) {
		return await getNewsDetails(args)
	}
}

export default {
	News,
	NewsDetail
}
