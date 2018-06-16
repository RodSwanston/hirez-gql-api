import { gql } from 'apollo-server'
import { getLeagueLeaderboard, getLeagueSeasons } from '../hirez'

export const LeagueType = gql`
	type LeagueSeason {
		id: Int
		complete: Boolean
		name: String
		ret_msg: String
	}

	type LeagueLeaderboard {
		Leaves: Int
		Losses: Int
		Points: Int
		PrevRank: Int
		Rank: Int
		Season: Int
		Tier: Int
		Trend: Int
		Wins: Int
		Name: String
		Rank_Stat_Conquest: String
		Rank_Stat_Duel: String
		Rank_Stat_Joust: String
		player_id: String
		ret_msg: String
	}

	extend type Query {
    leagueLeaderboard(queue: Int!, tier: Int!, season: Int!, type: gameType, platform: platform): [LeagueLeaderboard]
    leagueSeasons(queue: Int!, type: gameType, platform: platform): [LeagueSeason]
  }
`

export const LeagueResolvers = {
	Query: {
		async leagueLeaderboard(_, args) {
			return await getLeagueLeaderboard(args)
		},
		async leagueSeasons(_, args) {
			return await getLeagueSeasons(args)
		}
	}
}
