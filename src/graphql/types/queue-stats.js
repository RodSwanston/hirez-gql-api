import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} from 'graphql'

export const QueueStatsType = new GraphQLObjectType({
	name: 'QueueStatsType',
	fields: () => ({
		Assists: { type: GraphQLInt },
		Champion: { type: GraphQLString },
		ChampionId: { type: GraphQLInt },
		Deaths: { type: GraphQLInt },
		Gold: { type: GraphQLInt },
		Kills: { type: GraphQLInt },
		LastPlayed: { type: GraphQLString },
		Losses: { type: GraphQLInt },
		Matches: { type: GraphQLInt },
		Minutes: { type: GraphQLInt },
		Queue: { type: GraphQLString },
		Wins: { type: GraphQLInt },
		player_id: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})
