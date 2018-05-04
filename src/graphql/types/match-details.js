import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from 'graphql'
import { ItemMatchType } from './match-history'
import { Tier_String } from '../../utils/constants'
import { getDemoDetails } from '../../hirez'

function getItemMatch(matchType, item=false) {
	let prop = 'Active'
	let namePrp = 'Active'
	let times = 4

	if (item) {
		prop = 'Item'
		namePrp = 'Purch'
		times = 6
	}

	return Array.from({ length: times }).map((_, i) => ({
		Id: matchType[`${prop}Id${i + 1}`] || 0,
		Level: matchType[`${prop}Level${i + 1}`] || 0,
		Name: matchType[`Item_${namePrp}_${i + 1}`] || ''
	}))
}

function getTeam(matchDetail=[], team=1) {
	return matchDetail.filter(obj => obj.TaskForce === team)
}

export const MatchDemoDetailsType = new GraphQLObjectType({
	name: 'MatchDemoDetailsType',
	fields: () => ({
		BanId1: { type: GraphQLInt },
		BanId2: { type: GraphQLInt },
		BanId3: { type: GraphQLInt },
		BanId4: { type: GraphQLInt },
		Queue: { type: GraphQLString },
		Entry_Datetime: { type: GraphQLString },
		Match: { type: GraphQLInt },
		Match_Time: { type: GraphQLInt },
		Offline_Spectators: { type: GraphQLInt },
		Realtime_Spectators: { type: GraphQLInt },
		Recording_Ended: { type: GraphQLString },
		Recording_Started: { type: GraphQLString },
		Team1_AvgLevel: { type: GraphQLInt },
		Team1_Gold: { type: GraphQLInt },
		Team1_Kills: { type: GraphQLInt },
		Team1_Score: { type: GraphQLInt },
		Team2_AvgLevel: { type: GraphQLInt },
		Team2_Gold: { type: GraphQLInt },
		Team2_Kills: { type: GraphQLInt },
		Team2_Score: { type: GraphQLInt },
		Winning_Team: { type: GraphQLInt },
		ret_msg: { type: GraphQLString }
	})
})

export const DemoDetails = {
	type: MatchDemoDetailsType,
	async resolve(match) {
		const { Match, platform, type } = match[0] ? match[0] : match
		const args = { matchId: Match, platform, type }
		const demoDetails = await getDemoDetails(args)

		const details = Array.isArray(demoDetails) ? demoDetails[0] : demoDetails

		return details || {}
	}
}

export const MatchDetailsType = new GraphQLObjectType({
	name: 'MatchDetailsType',
	fields: () => ({
		Account_Level: { type: GraphQLInt },
		ActiveId1: { type: GraphQLInt },
		ActiveId2: { type: GraphQLInt },
		ActiveId3: { type: GraphQLInt },
		ActiveId4: { type: GraphQLInt },
		ActiveLevel1: { type: GraphQLInt },
		ActiveLevel2: { type: GraphQLInt },
		ActiveLevel3: { type: GraphQLInt },
		ActiveLevel4: { type: GraphQLInt },
		Assists: { type: GraphQLInt },
		BanId1: { type: GraphQLInt },
		BanId2: { type: GraphQLInt },
		BanId3: { type: GraphQLInt },
		BanId4: { type: GraphQLInt },
		Ban_1: { type: GraphQLString },
		Ban_2: { type: GraphQLString },
		Ban_3: { type: GraphQLString },
		Ban_4: { type: GraphQLString },
		Camps_Cleared: { type: GraphQLInt },
		ChampionId: { type: GraphQLInt },
		Damage_Bot: { type: GraphQLInt },
		Damage_Done_In_Hand: { type: GraphQLInt },
		Damage_Done_Magical: { type: GraphQLInt },
		Damage_Done_Physical: { type: GraphQLInt },
		Damage_Mitigated: { type: GraphQLInt },
		Damage_Player: { type: GraphQLInt },
		Damage_Taken: { type: GraphQLInt },
		Damage_Taken_Magical: { type: GraphQLInt },
		Damage_Taken_Physical: { type: GraphQLInt },
		Deaths: { type: GraphQLInt },
		Distance_Traveled: { type: GraphQLInt },
		Entry_Datetime: { type: GraphQLString },
		Final_Match_Level: { type: GraphQLInt },
		Gold_Earned: { type: GraphQLInt },
		Gold_Per_Minute: { type: GraphQLInt },
		Healing: { type: GraphQLInt },
		Healing_Bot: { type: GraphQLInt },
		Healing_Player_Self: { type: GraphQLInt },
		ItemId1: { type: GraphQLInt },
		ItemId2: { type: GraphQLInt },
		ItemId3: { type: GraphQLInt },
		ItemId4: { type: GraphQLInt },
		ItemId5: { type: GraphQLInt },
		ItemId6: { type: GraphQLInt },
		ItemLevel1: { type: GraphQLInt },
		ItemLevel2: { type: GraphQLInt },
		ItemLevel3: { type: GraphQLInt },
		ItemLevel4: { type: GraphQLInt },
		ItemLevel5: { type: GraphQLInt },
		ItemLevel6: { type: GraphQLInt },
		Item_Active_1: { type: GraphQLString },
		Item_Active_2: { type: GraphQLString },
		Item_Active_3: { type: GraphQLString },
		Item_Active_4: { type: GraphQLString },
		Item_Purch_1: { type: GraphQLString },
		Item_Purch_2: { type: GraphQLString },
		Item_Purch_3: { type: GraphQLString },
		Item_Purch_4: { type: GraphQLString },
		Item_Purch_5: { type: GraphQLString },
		Item_Purch_6: { type: GraphQLString },
		Killing_Spree: { type: GraphQLInt },
		Kills_Bot: { type: GraphQLInt },
		Kills_Double: { type: GraphQLInt },
		Kills_Fire_Giant: { type: GraphQLInt },
		Kills_First_Blood: { type: GraphQLInt },
		Kills_Gold_Fury: { type: GraphQLInt },
		Kills_Penta: { type: GraphQLInt },
		Kills_Phoenix: { type: GraphQLInt },
		Kills_Player: { type: GraphQLInt },
		Kills_Quadra: { type: GraphQLInt },
		Kills_Siege_Juggernaut: { type: GraphQLInt },
		Kills_Single: { type: GraphQLInt },
		Kills_Triple: { type: GraphQLInt },
		Kills_Wild_Juggernaut: { type: GraphQLInt },
		League_Losses: { type: GraphQLInt },
		League_Points: { type: GraphQLInt },
		League_Tier: { type: GraphQLInt },
		League_Wins: { type: GraphQLInt },
		Map_Game: { type: GraphQLString },
		Mastery_Level: { type: GraphQLInt },
		Match: { type: GraphQLInt },
		Minutes: { type: GraphQLInt },
		Multi_kill_Max: { type: GraphQLInt },
		Objective_Assists: { type: GraphQLInt },
		PartyId: { type: GraphQLInt },
		Rank_Stat_League: { type: GraphQLInt },
		Reference_Name: { type: GraphQLString },
		Region: { type: GraphQLString },
		Skin: { type: GraphQLString },
		SkinId: { type: GraphQLInt },
		Structure_Damage: { type: GraphQLInt },
		Surrendered: { type: GraphQLInt },
		TaskForce: { type: GraphQLInt },
		Team1Score: { type: GraphQLInt },
		Team2Score: { type: GraphQLInt },
		TeamId: { type: GraphQLInt },
		Team_Name: { type: GraphQLString },
		Time_In_Match_Seconds: { type: GraphQLInt },
		Towers_Destroyed: { type: GraphQLInt },
		Wards_Placed: { type: GraphQLInt },
		Win_Status: { type: GraphQLString },
		Winning_TaskForce: { type: GraphQLInt },
		hasReplay: { type: GraphQLString },
		name: { type: GraphQLString },
		playerId: { type: GraphQLString },
		playerName: { type: GraphQLString },
		ret_msg: { type: GraphQLString },
		DemoDetails,
		Tier_String,
		Items: {
			type: new GraphQLList(ItemMatchType),
			resolve(matchDeatil) {
				return getItemMatch(matchDeatil, true)
			}
		},
		Actives: {
			type: new GraphQLList(ItemMatchType),
			resolve(matchDeatil) {
				return getItemMatch(matchDeatil)
			}
		}
	})
})

export const GroupMatchDetailsType = new GraphQLObjectType({
	name: 'GroupMatchDetailsType',
	fields: () => ({
		DemoDetails,
		Team1: {
			type: new GraphQLList(MatchDetailsType),
			resolve(matchDetail) {
				return getTeam(matchDetail, 1)
			}
		},
		Team2: {
			type: new GraphQLList(MatchDetailsType),
			resolve(matchDetail) {
				return getTeam(matchDetail, 2)
			}
		}
	})
})
