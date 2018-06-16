import { gql } from 'apollo-server'
import { getMatchHistory, getMatchidsByQueue } from '../hirez'

function getItemMatch(matchType, item=false) {
	const prop = item ? 'Item' : 'Active'
	const times = item ? 6 : 4

	return Array.from({ length: times }).map((_, i) => ({
		Id: matchType[`${prop}Id${i + 1}`] || 0,
		Level: matchType[`${prop}Level${i + 1}`] || 0,
		Name: matchType[`${prop}_${i + 1}`] || ''
	}))
}

export const MatchType = gql`
	type ItemMatch {
		Id: Int
		Level: Int
		Name: String
	}

	type MatchIds {
		Active_Flag: String
		Match: String
		ret_msg: String
	}

	type MatchHistory {
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
		ActiveId1: Int
		ActiveId2: Int
		ActiveId3: Int
		ActiveId4: Int
		ActiveLevel1: Int
		ActiveLevel2: Int
		ActiveLevel3: Int
		ActiveLevel4: Int
		Assists: Int
		Creeps: Int
		Damage: Int
		ChampionId: Int
		Damage_Bot: Int
		Damage_Done_In_Hand: Int
		Damage_Mitigated: Int
		Damage_Structure: Int
		Damage_Taken: Int
		Damage_Taken_Magical: Int
		Damage_Taken_Physical: Int
		Deaths: Int
		Distance_Traveled: Int
		Gold: Int
		Healing: Int
		Healing_Bot: Int
		Healing_Player_Self: Int
		Killing_Spree: Int
		Kills: Int
		Level: Int
		Match: Int
		Minutes: Int
		Multi_kill_Max: Int
		Objective_Assists: Int
		SkinId: Int
		Surrendered: Int
		TaskForce: Int
		Team1Score: Int
		Team2Score: Int
		Time_In_Match_Seconds: Int
		Wards_Placed: Int
		Winning_TaskForce: Int
		Match_Queue_Id: Int
		Item_1: String
		Item_2: String
		Item_3: String
		Item_4: String
		Item_5: String
		Item_6: String
		Active_1: String
		Active_2: String
		Active_3: String
		Active_4: String
		Champion: String
		Map_Game: String
		Match_Time: String
		Queue: String
		Region: String
		Skin: String
		Win_Status: String
		playerName: String
		ret_msg: String
		Items: [ItemMatch]
		Actives: [ItemMatch]
	}

	extend type MatchDetails {
		Items: [ItemMatch]
		Actives: [ItemMatch]
	}

	extend type Query {
    matchHistory(player: String!, type: gameType, platform: platform): [MatchHistory]
		matchidsByQueue(queue: Int!, date: String!, hour: String!, type: gameType, platform: platform): [MatchIds]
  }
`

export const MatchResolvers = {
	Query: {
		async matchHistory(_, args) {
			return await getMatchHistory(args)
		},
		async matchidsByQueue(_, args) {
			return await getMatchidsByQueue(args)
		}
	},
	MatchHistory: {
		Items(match) {
			return getItemMatch(match, true)
		},
		Actives(match) {
			return getItemMatch(match)
		}
	}
}
