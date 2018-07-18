import { gql } from 'apollo-server-express'
import { getTier } from '../utils/constants'
import { getMatchDetails, getDemoDetails } from '../hirez'

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

export const MatchDetailsType = gql`
	type MatchDemoDetails {
		BanId1: Int
		BanId2: Int
		BanId3: Int
		BanId4: Int
		Match: Int
		Match_Time: Int
		Offline_Spectators: Int
		Realtime_Spectators: Int
		Team1_AvgLevel: Int
		Team1_Gold: Int
		Team1_Kills: Int
		Team1_Score: Int
		Team2_AvgLevel: Int
		Team2_Gold: Int
		Team2_Kills: Int
		Team2_Score: Int
		Winning_Team: Int
		Recording_Ended: String
		Queue: String
		Entry_Datetime: String
		Recording_Started: String
		ret_msg: String
	}

	type MatchDetails {
		Account_Level: Int
		ActiveId1: Int
		ActiveId2: Int
		ActiveId3: Int
		ActiveId4: Int
		ActiveLevel1: Int
		ActiveLevel2: Int
		ActiveLevel3: Int
		ActiveLevel4: Int
		Assists: Int
		BanId1: Int
		BanId2: Int
		BanId3: Int
		BanId4: Int
		Camps_Cleared: Int
		ChampionId: Int
		Damage_Bot: Int
		Damage_Done_In_Hand: Int
		Damage_Done_Magical: Int
		Damage_Done_Physical: Int
		Damage_Mitigated: Int
		Damage_Player: Int
		Damage_Taken: Int
		Damage_Taken_Magical: Int
		Damage_Taken_Physical: Int
		Deaths: Int
		Distance_Traveled: Int
		Final_Match_Level: Int
		Gold_Earned: Int
		Gold_Per_Minute: Int
		Healing: Int
		Healing_Bot: Int
		Healing_Player_Self: Int
		ItemId1: Int
		ItemId2: Int
		ItemId3: Int
		ItemId4: Int
		ItemId5: Int
		ItemId6: Int
		ItemLevel1: Int
		ItemLevel2: Int
		ItemLevel3: Int
		ItemLevel4: Int
		ItemLevel5: Int
		ItemLevel6: Int
		Killing_Spree: Int
		Kills_Bot: Int
		Kills_Double: Int
		Kills_Fire_Giant: Int
		Kills_First_Blood: Int
		Kills_Gold_Fury: Int
		Kills_Penta: Int
		Kills_Phoenix: Int
		Kills_Player: Int
		Kills_Quadra: Int
		Kills_Siege_Juggernaut: Int
		Kills_Single: Int
		Kills_Triple: Int
		Kills_Wild_Juggernaut: Int
		League_Losses: Int
		League_Points: Int
		League_Tier: Int
		League_Wins: Int
		Mastery_Level: Int
		Match: Int
		Minutes: Int
		Multi_kill_Max: Int
		Objective_Assists: Int
		PartyId: Int
		Rank_Stat_League: Int
		SkinId: Int
		Structure_Damage: Int
		Surrendered: Int
		TaskForce: Int
		Team1Score: Int
		Team2Score: Int
		TeamId: Int
		Time_In_Match_Seconds: Int
		Towers_Destroyed: Int
		Wards_Placed: Int
		Winning_TaskForce: Int
		match_queue_id: Int
		Entry_Datetime: String
		Map_Game: String
		Ban_1: String
		Ban_2: String
		Ban_3: String
		Ban_4: String
		Item_Active_1: String
		Item_Active_2: String
		Item_Active_3: String
		Item_Active_4: String
		Item_Purch_1: String
		Item_Purch_2: String
		Item_Purch_3: String
		Item_Purch_4: String
		Item_Purch_5: String
		Item_Purch_6: String
		Reference_Name: String
		Region: String
		Skin: String
		Team_Name: String
		Win_Status: String
		hasReplay: String
		name: String
		playerId: String
		playerName: String
		ret_msg: String
		Tier_String: String
		DemoDetails: MatchDemoDetails
	}

	type GroupMatchDetails {
		Team1: [MatchDetails]
		Team2: [MatchDetails]
	}

	extend type Query {
    matchDetails(matchId: Int!, type: gameType, platform: platform): [MatchDetails]
    groupMatchDetails(matchId: Int!, type: gameType, platform: platform): GroupMatchDetails
  }
`

export const MatchDetailsResolvers = {
	Query: {
		async matchDetails(_, args) {
			return await getMatchDetails(args)
		},
		async groupMatchDetails(_, args) {
			return await getMatchDetails(args)
		}
	},
	MatchDetails: {
		Tier_String(matchDeatil) {
			return getTier(matchDeatil)
		},
		Items(matchDeatil) {
			return getItemMatch(matchDeatil, true)
		},
		Actives(matchDeatil) {
			return getItemMatch(matchDeatil)
		},
		async DemoDetails(match) {
			const { Match, platform, type } = match[0] ? match[0] : match
			const args = { matchId: Match, platform, type }
			const demoDetails = await getDemoDetails(args)

			const details = Array.isArray(demoDetails) ? demoDetails[0] : demoDetails

			return details || {}
		}
	},
	GroupMatchDetails: {
		Team1(matchDetail) {
			return getTeam(matchDetail, 1)
		},
		Team2(matchDetail) {
			return getTeam(matchDetail, 2)
		}
	}
}
