import { gql } from 'apollo-server'
import { getEsportsProLeagueDetails } from '../hirez'

function getTeam(esportMatch, homeTeam=true) {
	const prop = homeTeam ? 'home' : 'away'
	return {
		id: esportMatch[`${prop}_team_clan_id`] || 0,
		name: esportMatch[`${prop}_team_name`] || '',
		tagname: esportMatch[`${prop}_team_tagname`] || ''
	}
}

export const TeamType = gql`
	type TeamEsportMatch {
		id: Int
		name: String
		tagname: String
	}

	type EsportMatch {
		away_team_clan_id: Int
		home_team_clan_id: Int
		winning_team_clan_id: Int
		away_team_name: String
		away_team_tagname: String
		home_team_name: String
		home_team_tagname: String
		map_instance_id: String
		match_date: String
		match_number: String
		match_status: String
		matchup_id: String
		region: String
		tournament_name: String
		ret_msg: String
		home_team: TeamEsportMatch
		away_team: TeamEsportMatch
	}

	extend type Query {
    esportsProLeagueDetails(type: gameType, platform: platform): [EsportMatch]
  }
`

export const TeamResolvers = {
	Query: {
		async esportsProLeagueDetails(_, args) {
			return await getEsportsProLeagueDetails(args)
		}
	},
	EsportMatch: {
		home_team(esportMatch) {
			return getTeam(esportMatch)
		},
		away_team(esportMatch) {
			return getTeam(esportMatch, false)
		}
	}
}
