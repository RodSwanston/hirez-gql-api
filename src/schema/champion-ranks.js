import { gql } from 'apollo-server-express'
import { getChampionRanks } from '../hirez'

export const ChampionsRankType = gql`
	type ChampionsRank {
		Assists: Int
		Deaths: Int
		Kills: Int
		Losses: Int
		MinionKills: Int
		Rank: Int
		Wins: Int
		Worshippers: Int
		champion: String
		champion_id: String
		player_id: String
		ret_msg: String
	}

	extend type Query {
    championsRank(player: String!, type: gameType, platform: platform): [ChampionsRank]
  }
`

export const ChampionsRankResolvers = {
	Query: {
		async championsRank(_, args) {
			return await getChampionRanks(args)
		}
	}
}
