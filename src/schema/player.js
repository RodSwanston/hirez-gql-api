import { gql } from 'apollo-server-express'
import { getTier } from '../utils/constants'
import {
	getPlayer,
	getFriends,
	getPlayerStatus,
	getChampionRanks
} from '../hirez'

export const PlayerType = gql`
	type RankedConquest {
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
		Tier_String: String
		ret_msg: String
	}

	type Player {
		Id: Int
		ActivePlayerId: Int
		Level: Int
		Leaves: Int
		Losses: Int
		MasteryLevel: Int
		TeamId: Int
		Tier_Conquest: Int
		Total_Achievements: Int
		Total_Worshippers: Int
		Wins: Int
		Name: String
		platform: String
		Platform: String
		Personal_Status_Message: String
		Last_Login_Datetime: String
		Created_Datetime: String
		Region: String
		Team_Name: String
		ret_msg: String
		Tier_Conquest_String: String
		RankedConquest: RankedConquest
		RankedController: RankedConquest
		RankedKBM: RankedConquest
		Status: PlayerStatus
		Friends: [Friend]
		Champion_Ranks: [ChampionsRank]
		type: String
		HoursPlayed: Int
		hz_gamer_tag: String
		hz_player_name: String
	}

	extend type Query {
    player(player: String!, type: gameType, platform: platform): Player
    players(player: String!, type: gameType, platform: platform): [Player]
  }
`

export const PlayerResolvers = {
	Query: {
		async player(_, args) {
			const player = await getPlayer(args)
			return Array.isArray(player) ? player[0] : player
		},
		async players(_, args) {
			return await getPlayer(args)
		}
	},
	Player: {
		Tier_Conquest_String(player) {
			return getTier(player)
		},
		async Friends({ Name, platform, type }) {
			const args = { player: Name, platform, type }
			return await getFriends(args)
		},
		async Status({ Name,  platform, type }) {
			const args = { player: Name, platform, type }
			const status = await getPlayerStatus(args)
			return Array.isArray(status) ? status[0] : status
		},
		async Champion_Ranks({ Name, platform }) {
			const args = { player: Name, platform }
			return await getChampionRanks(args)
		}
	},
	RankedConquest: {
		Tier_String(rc) {
			return getTier(rc)
		}
	}
}
