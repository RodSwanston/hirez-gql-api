import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from 'graphql'

function getItemMatch(matchType, item=false) {
	const prop = item ? 'Item' : 'Active'
	const times = item ? 6 : 4

	return Array.from({ length: times }).map((_, i) => ({
		Id: matchType[`${prop}Id${i + 1}`] || 0,
		Level: matchType[`${prop}Level${i + 1}`] || 0,
		Name: matchType[`${prop}_${i + 1}`] || ''
	}))
}

export const ItemMatchType = new GraphQLObjectType({
	name: 'ItemMatchType',
	fields: () => ({
		Id: { type: GraphQLInt },
		Level: { type: GraphQLInt },
		Name: { type: GraphQLString }
	})
})

export const MatchHistoryType = new GraphQLObjectType({
	name: 'MatchHistoryType',
	fields: () => ({
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
		Item_1: { type: GraphQLString },
		Item_2: { type: GraphQLString },
		Item_3: { type: GraphQLString },
		Item_4: { type: GraphQLString },
		Item_5: { type: GraphQLString },
		Item_6: { type: GraphQLString },
		ActiveId1: { type: GraphQLInt },
		ActiveId2: { type: GraphQLInt },
		ActiveId3: { type: GraphQLInt },
		ActiveId4: { type: GraphQLInt },
		ActiveLevel1: { type: GraphQLInt },
		ActiveLevel2: { type: GraphQLInt },
		ActiveLevel3: { type: GraphQLInt },
		ActiveLevel4: { type: GraphQLInt },
		Active_1: { type: GraphQLString },
		Active_2: { type: GraphQLString },
		Active_3: { type: GraphQLString },
		Active_4: { type: GraphQLString },
		Champion: { type: GraphQLString },
		ChampionId: { type: GraphQLInt },
		Assists: { type: GraphQLInt },
		Creeps: { type: GraphQLInt },
		Damage: { type: GraphQLInt },
		Damage_Bot: { type: GraphQLInt },
		Damage_Done_In_Hand: { type: GraphQLInt },
		Damage_Mitigated: { type: GraphQLInt },
		Damage_Structure: { type: GraphQLInt },
		Damage_Taken: { type: GraphQLInt },
		Damage_Taken_Magical: { type: GraphQLInt },
		Damage_Taken_Physical: { type: GraphQLInt },
		Deaths: { type: GraphQLInt },
		Distance_Traveled: { type: GraphQLInt },
		Gold: { type: GraphQLInt },
		Healing: { type: GraphQLInt },
		Healing_Bot: { type: GraphQLInt },
		Healing_Player_Self: { type: GraphQLInt },
		Killing_Spree: { type: GraphQLInt },
		Kills: { type: GraphQLInt },
		Level: { type: GraphQLInt },
		Map_Game: { type: GraphQLString },
		Match: { type: GraphQLInt },
		Match_Time: { type: GraphQLString },
		Minutes: { type: GraphQLInt },
		Multi_kill_Max: { type: GraphQLInt },
		Objective_Assists: { type: GraphQLInt },
		Queue: { type: GraphQLString },
		Region: { type: GraphQLString },
		Skin: { type: GraphQLString },
		SkinId: { type: GraphQLInt },
		Surrendered: { type: GraphQLInt },
		TaskForce: { type: GraphQLInt },
		Team1Score: { type: GraphQLInt },
		Team2Score: { type: GraphQLInt },
		Time_In_Match_Seconds: { type: GraphQLInt },
		Wards_Placed: { type: GraphQLInt },
		Win_Status: { type: GraphQLString },
		Winning_TaskForce: { type: GraphQLInt },
		playerName: { type: GraphQLString },
		ret_msg: { type: GraphQLString },
		Items: {
			type: new GraphQLList(ItemMatchType),
			resolve(match) {
				return getItemMatch(match, true)
			}
		},
		Actives: {
			type: new GraphQLList(ItemMatchType),
			resolve(match) {
				return getItemMatch(match)
			}
		}
	})
})

export const MatchIdsType = new GraphQLObjectType({
	name: 'MatchIdsType',
	fields: () => ({
		Active_Flag: { type: GraphQLString },
		Match: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})
