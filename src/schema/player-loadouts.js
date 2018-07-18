import { gql } from 'apollo-server-express'
import { getPlayerLoadouts } from '../hirez'

export const LoadoutType = gql`
	type LoadoutItem {
		ItemId: Int
		Points: Int
		ItemName: String
	}

	type PlayerLoadout {
		ChampionId: Int
		DeckId: Int
		playerId: Int
		ChampionName: String
		DeckName: String
		playerName: String
		ret_msg: String
		LoadoutItems: [LoadoutItem]
	}

	extend type Query {
    playerLoadout(player: String!, languageCode: lang!, type: gameType, platform: platform): [PlayerLoadout]
  }
`

export const LoadoutResolvers = {
	Query: {
		async playerLoadout(_, args) {
			return await getPlayerLoadouts(args)
		}
	}
}
