import { gql } from 'apollo-server-express'

export const RootQuery = gql`
	enum gameType {
    PALADINS
    SMITE
  }

	enum platform {
    PC
    PS4
		XBOX
  }

	enum lang {
    EN
    DE
		FR
		ZH
		ES
		ESL
		PT
		RU
		PL
		TR
  }

  type Query {
    _empty: String
  }
`

export const RootResolvers = {
	gameType: {
		PALADINS: 'paladins',
    SMITE: 'smite'
	},
	platform: {
		PC: 'pc',
    PS4: 'ps4',
		XBOX: 'xbox'
	},
	lang: {
		EN: 1,
    DE: 2,
		FR: 3,
		ZH: 5,
		ES: 7,
		ESL: 9,
		PT: 10,
		RU: 11,
		PL: 12,
		TR: 13
	}
}
