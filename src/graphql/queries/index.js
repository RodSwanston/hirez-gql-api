import PlayersQuery from './player'
import FriendsQuery from './friends'
import PlayersStatusQuery from './player-status'
import QueueStatsQuery from './queue-stats'
import ChampionsRankQuery from './champion-ranks'
import PlayerLoadoutsQuery  from './player-loadouts'
import MatchHistoryQuery from './match-history'
import MatchDetailsQuery from './match-details'
import ChampionsQuery from './champions'
import ItemsQuery from './items'
import LeagueQuery from './league'
import TeamQuery from './team'
import PatchInfoQuery from './patch-info'

export default {
	...PlayersQuery,
	...FriendsQuery,
	...PlayersStatusQuery,
	...QueueStatsQuery,
	...ChampionsRankQuery,
	...PlayerLoadoutsQuery,
	...MatchHistoryQuery,
	...MatchDetailsQuery,
	...ChampionsQuery,
	...ItemsQuery,
	...LeagueQuery,
	...PatchInfoQuery,
	...TeamQuery,
}
