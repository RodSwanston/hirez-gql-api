import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from 'graphql'
import {
	getFriends,
	getPlayerStatus,
	getChampionRanks
} from '../../hirez'
import { FriendType } from './friends'
import { ChampionRankType } from './champion-ranks'
import { PlayerStatusType } from './player-status'
import { Tier_String } from '../../utils/constants'

export const RankedConquestType = new GraphQLObjectType({
	name: 'RankedConquestType',
	fields: () => ({
		Leaves: { type: GraphQLInt },
		Losses: { type: GraphQLInt },
		Points: { type: GraphQLInt },
		PrevRank: { type: GraphQLInt },
		Rank: { type: GraphQLInt },
		Season: { type: GraphQLInt },
		Tier: { type: GraphQLInt },
		Trend: { type: GraphQLInt },
		Wins: { type: GraphQLInt },
		Name: { type: GraphQLString },
		Rank_Stat_Conquest: { type: GraphQLString },
		Rank_Stat_Duel: { type: GraphQLString },
		Rank_Stat_Joust: { type: GraphQLString },
		player_id: { type: GraphQLString },
		ret_msg: { type: GraphQLString },
		Tier_String
	})
})

export const PlayerType = new GraphQLObjectType({
	name: 'PlayerType',
	fields: () => ({
		Id: { type: GraphQLInt },
		Level: { type: GraphQLInt },
		Leaves: { type: GraphQLInt },
		Losses: { type: GraphQLInt },
		MasteryLevel: { type: GraphQLInt },
		TeamId: { type: GraphQLInt },
		Tier_Conquest: { type: GraphQLInt },
		Tier_Conquest_String: Tier_String,
		Total_Achievements: { type: GraphQLInt },
		Total_Worshippers: { type: GraphQLInt },
		Wins: { type: GraphQLInt },
		Name: { type: GraphQLString },
		Personal_Status_Message: { type: GraphQLString },
		Last_Login_Datetime: { type: GraphQLString },
		Created_Datetime: { type: GraphQLString },
		Region: { type: GraphQLString },
		Team_Name: { type: GraphQLString },
		ret_msg: { type: GraphQLString },
		RankedConquest: { type: RankedConquestType },
		Status : {
			type: PlayerStatusType,
			async resolve({ Name, platform, type }) {
				const args = { player: Name, platform, type }
				const status = await getPlayerStatus(args)
				return Array.isArray(status) ? status[0] : status
			}
		},
		Friends: {
			type: new GraphQLList(FriendType),
			async resolve({ Name, platform, type }) {
				const args = { player: Name, platform, type }
				return await getFriends(args)
			}
		},
		Champion_Ranks: {
			type: new GraphQLList(ChampionRankType),
			async resolve({ Name, platform }) {
				const args = { player: Name, platform, }
				return await getChampionRanks(args)
			}
		}
	})
})
