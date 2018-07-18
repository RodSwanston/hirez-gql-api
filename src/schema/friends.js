import { gql } from 'apollo-server-express'
import { getFriends } from '../hirez'

export const FriendType = gql`
	type Friend {
		account_id: String
		name: String
		player_id: String
		ret_msg: String
	}

	extend type Query {
    friends(player: String!, type: gameType, platform: platform): [Friend]
  }
`

export const FriendResolvers = {
	Query: {
		async friends(_, args) {
			return await getFriends(args)
		}
	}
}
