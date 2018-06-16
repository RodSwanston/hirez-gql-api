import { RootQuery, RootResolvers } from './query'
import { PlayerType, PlayerResolvers } from './player'
import { MatchType, MatchResolvers } from './match-history'
import { MatchDetailsType, MatchDetailsResolvers } from './match-details'
import { ChampionType, ChampionsResolvers } from './champions'
import { FriendType, FriendResolvers } from './friends'
import { PlayerStatusType, PlayerStatusResolvers } from './player-status'
import { QueueStatsType, QueueStatsResolvers } from './queue-stats'
import { ChampionsRankType, ChampionsRankResolvers } from './champion-ranks'
import { LoadoutType, LoadoutResolvers } from './player-loadouts'
import { ItemType, ItemdResolvers } from './items'
import { LeagueType, LeagueResolvers } from './league'
import { TeamType, TeamResolvers } from './team'
import { PatchInfoType, PatchInfoResolvers } from './patch-info'
import { NewsType, NewsResolvers } from './news'

import { mergeDeep } from '../utils'

export const typeDefs = [
	RootQuery,
	PlayerType,
	FriendType,
	PlayerStatusType,
	MatchDetailsType,
	MatchType,
	QueueStatsType,
	ChampionType,
	ChampionsRankType,
	LoadoutType,
	ItemType,
	LeagueType,
	TeamType,
	PatchInfoType,
	NewsType
]

export const resolvers = mergeDeep(
	RootResolvers,
	PlayerResolvers,
	FriendResolvers,
	MatchDetailsResolvers,
	MatchResolvers,
	ChampionsResolvers,
	ChampionsRankResolvers,
	TeamResolvers,
	PlayerStatusResolvers,
	QueueStatsResolvers,
	LoadoutResolvers,
	ItemdResolvers,
	LeagueResolvers,
	PatchInfoResolvers,
	NewsResolvers
)
