export const URL = {
	paladins: {
		pc: 'http://api.paladins.com/paladinsapi.svc',
		ps4: 'http://api.ps4.paladins.com/paladinsapi.svc',
		xbox: 'http://api.xbox.paladins.com/paladinsapi.svc',
		cms: 'https://cms.paladins.com/wp-json/api'
	},
	smite: {
		pc: 'http://api.smitegame.com/smiteapi.svc',
		ps4: 'http://api.ps4.smitegame.com/smiteapi.svc',
		xbox: 'http://api.xbox.smitegame.com/smiteapi.svc'
	}
}

export const PALADINS_QUEUE = {
  CASUAL: 424,
  TEAMDEATHMATCH: 469,
  ONSLAUGHT: 452,
  COMPETITIVE: 428,
  CLASSICSIEGE: 465,
  SIEGEPRACTICE: 425,
  ONSLAUGHTPRACTICE: 453,
  TEAMDEATHMATCHPRACTICE: 470,
  TESTMAPS: 445,
  CUSTOM_T_MAGISTRATESARCHIVES: 472,
  CUSTOM_T_TRADEDISTRICT: 468,
  CUSTOM_S_STONEKEEP: 423,
  CUSTOM_T_FOREMANSRISE: 471,
  CUSTOM_S_FROGISLE: 433,
  CUSTOM_S_FISHMARKET: 431,
  CUSTOM_S_BRIGHTMARSH: 458,
  CUSTOM_S_TIMBERMILL: 430,
  CUSTOM_S_SERPENTBEACH: 440,
  CUSTOM_S_JAGUARFALLS: 438,
  CUSTOM_S_SPLITSTONEQUARRY: 459,
  CUSTOM_O_MAGISTRATESARCHIVES: 464,
  CUSTOM_S_FROZENGUARD: 432,
  CUSTOM_O_FOREMANSRISE: 462,
  CUSTOM_S_ICEMINES: 439,
  CUSTOM_O_PRIMALCOURT: 455,
  CUSTOM_O_SNOWFALLJUNCTION: 454
}

export const TIER = {
	'1': 'Bronze V',
	'2': 'Bronze IV',
	'3': 'Bronze III',
	'4': 'Bronze II',
	'5': 'Bronze I',
	'6': 'Silver V',
	'7': 'Silver IV',
	'8': 'Silver III',
	'9': 'Silver II',
	'10': 'Silver I',
	'11': 'Gold V',
	'12': 'Gold IV',
	'13': 'Gold III',
	'14': 'Gold II',
	'15': 'Gold I',
	'16': 'Platinum V',
	'17': 'Platinum IV',
	'18': 'Platinum III',
	'19': 'Platinum II',
	'20': 'Platinum I',
	'21': 'Diamond V',
	'22': 'Diamond IV',
	'23': 'Diamond III',
	'24': 'Diamond II',
	'25': 'Diamond I',
	'26': 'Masters I',
	'27': 'Grandmaster'
}

export function getTier({ Tier, Tier_Conquest, League_Tier }) {
	return TIER[`${Tier || Tier_Conquest || League_Tier}`] || ''
}
