import { gql } from 'apollo-server'
import { getNews, getNewsDetails } from '../hirez'

export const NewsType = gql`
	type News {
		id: Int
		author: String
		featured_image: String
		real_categories: String
		timestamp: String
		title: String
		slug: String
	}

	type NewsDetail {
		id: Int
		author: String
		featured_image: String
		real_categories: String
		timestamp: String
		title: String
		content: String
	}

	extend type Query {
    news(page: Int, offset: Int): [News]
    newsDetail(slug: String!): [NewsDetail]
  }
`

export const NewsResolvers = {
	Query: {
		async news(_, args) {
			return await getNews(args)
		},
		async newsDetail(_, args) {
			return await getNewsDetails(args)
		}
	}
}
