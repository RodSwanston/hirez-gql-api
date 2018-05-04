import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} from 'graphql'

function getTeam(esportMatch, homeTeam=true) {
	const prop = homeTeam ? 'home' : 'away'
	return {
		id: esportMatch[`${prop}_team_clan_id`] || 0,
		name: esportMatch[`${prop}_team_name`] || '',
		tagname: esportMatch[`${prop}_team_tagname`] || ''
	}
}

export const TeamEsportMatchType = new GraphQLObjectType({
	name: 'TeamEsportMatchType',
	fields: () => ({
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		tagname: { type: GraphQLString }
	})
})

export const EsportMatchType = new GraphQLObjectType({
	name: 'EsportMatchType',
	fields: () => ({
		away_team_clan_id: { type: GraphQLInt },
		away_team_name: { type: GraphQLString },
		away_team_tagname: { type: GraphQLString },
		home_team_clan_id: { type: GraphQLInt },
		home_team_name: { type: GraphQLString },
		home_team_tagname: { type: GraphQLString },
		map_instance_id: { type: GraphQLString },
		match_date: { type: GraphQLString },
		match_number: { type: GraphQLString },
		match_status: { type: GraphQLString },
		matchup_id: { type: GraphQLString },
		region: { type: GraphQLString },
		tournament_name: { type: GraphQLString },
		winning_team_clan_id: { type: GraphQLInt },
		ret_msg: { type: GraphQLString },
		home_team: {
			type: TeamEsportMatchType,
			resolve(esportMatch) {
				return getTeam(esportMatch)
			}
		},
		away_team: {
			type: TeamEsportMatchType,
			resolve(esportMatch) {
				return getTeam(esportMatch, false)
			}
		}
	})
})
