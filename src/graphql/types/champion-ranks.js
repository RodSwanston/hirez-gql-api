import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql'

export const ChampionRankType = new GraphQLObjectType({
	name: 'ChampionRankType',
	fields: () => ({
		Assists: { type: GraphQLInt },
		Deaths: { type: GraphQLInt },
		Kills: { type: GraphQLInt },
		Losses: { type: GraphQLInt },
		MinionKills: { type: GraphQLInt },
		Rank: { type: GraphQLInt },
		Wins: { type: GraphQLInt },
		Worshippers: { type: GraphQLInt },
		champion: { type: GraphQLString },
		champion_id: { type: GraphQLString },
		player_id: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})
