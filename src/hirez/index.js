import config from '../config'
import { sessions } from './session'
import { logger, sortBy } from '../utils'

function getSession(type=config.type, platform=config.platform) {
	return (sessions[type] || {})[platform]
}

export async function getPlayer({ player, platform, type }) {
	const URL = 'getplayer'
	const params = `${player}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params, true)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getFriends({ player, platform, type }) {
	const URL = 'getfriends'
	const params = `${player}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getPlayerStatus({ player, platform, type }) {
	const URL = 'getplayerstatus'
	const params = `${player}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getQueueStats({ player, queue, platform, type }) {
	const URL = 'getqueuestats'
	const params = `${player}/${queue}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getChampionRanks({ player, platform }) {
	const URL = 'getchampionranks'
	const params = `${player}`
	const session = getSession('paladins', platform)

	try {
		const data = await session.makeRequest(URL, params)
		if (Array.isArray(data)) {
			data.sort(sortBy('Rank')).reverse()
		}
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: smite
export async function getGodRanks({ player, platform }) {
	const URL = 'getgodranks'
	const params = `${player}`
	const session = getSession('smite', platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getPlayerLoadouts({ player, languageCode='1', platform, type }) {
	const URL = 'getplayerloadouts'
	const params = `${player}/${languageCode}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: smite(?)
export async function getPlayerAchievements({ playerId, platform, type }) {
	const URL = 'getplayerachievements'
	const params = `${playerId}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getMatchHistory({ player, platform, type }) {
	const URL = 'getmatchhistory'
	const params = `${player}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getMatchDetails({ matchId, platform, type }) {
	const URL = 'getmatchdetails'
	const params = `${matchId}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params, true)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO:
export async function getMatchDetailsBatch({ matchIds=[], platform, type }) {
	const URL = 'getmatchdetailsbatch'
	const params = `${matchIds.join(',')}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getDemoDetails({ matchId, platform, type }) {
	const URL = 'getdemodetails'
	const params = `${matchId}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: API ERROR
export async function getMatchPlayerDetails({ matchId, platform, type }) {
	const URL = 'getmatchplayerdetails'
	const params = `${matchId}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getMatchidsByQueue({ queue, date, hour, platform, type }) {
	const URL = 'getmatchidsbyqueue'
	const params = `${queue}/${date}/${hour}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: API ERROR(?) return empty array
export async function getMotd({ platform, type }) {
	const URL = 'getmotd'
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getChampions({ languageCode='1', platform }) {
	const URL = 'getchampions'
	const params = `${languageCode}`
	const session = getSession('paladins', platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: smite
export async function getGods({ languageCode='1', platform }) {
	const URL = 'getgods'
	const params = `${languageCode}`
	const session = getSession('smite', platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: smite
export async function getGodRecommendedItems({ godId, languageCode='1', platform }) {
	const URL = 'getgodrecommendeditems'
	const params = `${godId}/${languageCode}`
	const session = getSession('smite', platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getItems({ languageCode='1', championId, platform, type }) {
	const URL = 'getitems'
	const params = `${languageCode}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		if(championId) {
			return data.filter(obj => obj.champion_id === championId) || {}
		}
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: smite
export async function getGodLeaderboard({ godId, queue, platform }) {
	const URL = 'getgodleaderboard'
	const params = `${godId}/${queue}`
	const session = getSession('smite', platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: smite
export async function getGodSkins({ godId, languageCode='1', platform }) {
	const URL = 'getgodskins'
	const params = `${godId}/${languageCode}`
	const session = getSession('smite', platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getChampionSkins({ championId, languageCode='1', platform }) {
	const URL = 'getchampionskins'
	const params = `${championId}/${languageCode}`
	const session = getSession('paladins', platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getLeagueLeaderboard({ queue, tier, season, platform, type }) {
	const URL = 'getleagueleaderboard'
	const params = `${queue}/${tier}/${season}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getLeagueSeasons({ queue, platform, type }) {
	const URL = 'getleagueseasons'
	const params = `${queue}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getEsportsProLeagueDetails({ platform, type }) {
	const URL = 'getesportsproleaguedetails'
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: API ERROR(?) return empty array
export async function searchTeams({ searchTeam, platform, type }) {
	const URL = 'searchteams'
	const params = `${searchTeam}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: API ERROR(?) return empty array
export async function getTeamDetails({ clanId, platform, type }) {
	const URL = 'getteamdetails'
	const params = `${clanId}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

//TODO: API ERROR(?) return empty array
export async function getTeamPlayers({ clanId, platform, type }) {
	const URL = 'getteamplayers'
	const params = `${clanId}`
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL, params)
		return data
	} catch (error) {
		logger.error(error)
	}
}

export async function getPatchInfo({ platform, type }) {
	const URL = 'getpatchinfo'
	const session = getSession(type, platform)

	try {
		const data = await session.makeRequest(URL)
		return data
	} catch (error) {
		logger.error(error)
	}
}
