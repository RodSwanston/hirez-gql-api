import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean
} from 'graphql'

export const LeagueSeasonType = new GraphQLObjectType({
	name: 'LeagueSeasonType',
	fields: () => ({
		complete: { type: GraphQLBoolean },
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})

export const LeagueLeaderboardType = new GraphQLObjectType({
	name: 'LeagueLeaderboardType',
	fields: () => ({
		Leaves: { type: GraphQLInt },
		Losses: { type: GraphQLInt },
		Name: { type: GraphQLString },
		Points: { type: GraphQLInt },
		PrevRank: { type: GraphQLInt },
		Rank: { type: GraphQLInt },
		Rank_Stat_Conquest: { type: GraphQLString },
		Rank_Stat_Duel: { type: GraphQLString },
		Rank_Stat_Joust: { type: GraphQLString },
		Season: { type: GraphQLInt },
		Tier: { type: GraphQLInt },
		Trend: { type: GraphQLInt },
		Wins: { type: GraphQLInt },
		player_id: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})
