import { gql } from 'apollo-server'
import { getQueueStats } from '../hirez'

export const QueueStatsType = gql`
	type QueueStats {
		Assists: Int
		ChampionId: Int
		Deaths: Int
		Gold: Int
		Kills: Int
		Losses: Int
		Matches: Int
		Minutes: Int
		Wins: Int
		Champion: String
		LastPlayed: String
		Queue: String
		player_id: String
		ret_msg: String
	}

	extend type Query {
    queueStats(player: String!, queue: Int!, type: gameType, platform: platform): [QueueStats]
  }
`

export const QueueStatsResolvers = {
	Query: {
		async queueStats(_, args) {
			return await getQueueStats(args)
		}
	}
}
