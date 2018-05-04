import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from 'graphql'

export const LoadoutItemType = new GraphQLObjectType({
	name: 'LoadoutItemType',
	fields: () => ({
		ItemId: { type: GraphQLInt },
		ItemName: { type: GraphQLString },
		Points: { type: GraphQLInt },
	})
})

export const PlayerLoadoutType = new GraphQLObjectType({
	name: 'PlayerLoadoutType',
	fields: () => ({
		ChampionId: { type: GraphQLInt },
		ChampionName: { type: GraphQLString },
		DeckId: { type: GraphQLInt },
		DeckName: { type: GraphQLString },
		playerId: { type: GraphQLInt },
		playerName: { type: GraphQLString },
		ret_msg: { type: GraphQLString },
		LoadoutItems: { type: new GraphQLList(LoadoutItemType) },
	})
})
