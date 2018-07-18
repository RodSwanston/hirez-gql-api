import { gql } from 'apollo-server-express'
import { getChampions, getChampionSkins } from '../hirez'

function getChampionAbilities(champion, times=5) {
	return Array.from({ length: times }).map((_, i) => ({
		Id: champion[`AbilityId${i + 1}`] || 0,
		Name: champion[`Ability${i + 1}`] || '',
		URL: champion[`ChampionAbility${i + 1}_URL`] || '',
		Description: (champion[`Ability_${i + 1}`] || {}).Description || '',
		Summary: (champion[`Ability_${i + 1}`] || {}).Summary || '',
		Info: champion[`Ability_${i + 1}`] || {},
	}))
}

export const ChampionType = gql`
	type Ability {
		Id: Int
		Description: String
		Summary: String
		URL: String
	}

	type ChampionAbility {
		Id: Int
		Name: String
		URL: String
		Description: String
		Summary: String
		Info: Ability
	}

	type ChampionSkins {
		champion_id: Int
		skin_id1: Int
		skin_id2: Int
		champion_name: String
		rarity: String
		skin_name: String
		skin_name_english: String
		ret_msg: String
	}

	type Champion {
		id: Int
		Speed: Int
		Health: Int
		AbilityId2: Int
		AbilityId3: Int
		AbilityId4: Int
		AbilityId5: Int
		Ability1: String
		Ability2: String
		Ability3: String
		Ability4: String
		Ability5: String
		AbilityId1: Int
		Ability_1: Ability
		Ability_2: Ability
		Ability_3: Ability
		Ability_4: Ability
		Ability_5: Ability
		ChampionAbility1_URL: String
		ChampionAbility2_URL: String
		ChampionAbility3_URL: String
		ChampionAbility4_URL: String
		ChampionAbility5_URL: String
		ChampionCard_URL: String
		ChampionIcon_URL: String
		Cons: String
		Lore: String
		Name: String
		OnFreeRotation: String
		Pantheon: String
		Pros: String
		Roles: String
		Title: String
		Type: String
		abilityDescription1: String
		abilityDescription2: String
		abilityDescription3: String
		abilityDescription4: String
		abilityDescription5: String
		ret_msg: String
		latestChampion: Boolean
		Abilities: [ChampionAbility]
	}

	extend type Query {
    champions(languageCode: lang!, platform: platform): [Champion]
    championSkins(championId: Int!, languageCode: lang!, platform: platform): [ChampionSkins]
  }
`

export const ChampionsResolvers = {
	Query: {
		async champions(_, args) {
			return await getChampions(args)
		},
		async championSkins(_, args) {
			return await getChampionSkins(args)
		}
	},
	Champion: {
		latestChampion({ latestChampion }) {
			return latestChampion === 'y'
		},
		Abilities(champion) {
			return getChampionAbilities(champion)
		}
	}
}
