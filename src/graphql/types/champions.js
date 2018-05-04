import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLBoolean
} from 'graphql'

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

export const AbilityType = new GraphQLObjectType({
	name: 'AbilityType',
	fields: () => ({
		Description: { type: GraphQLString },
		Id: { type: GraphQLInt },
		Summary: { type: GraphQLString },
		URL: { type: GraphQLString }
	})
})

export const ChampionAbilityType = new GraphQLObjectType({
	name: 'ChampionAbilityType',
	fields: () => ({
		Id: { type: GraphQLInt },
		Name: { type: GraphQLString },
		URL: { type: GraphQLString },
		Description: { type: GraphQLString },
		Summary: { type: GraphQLString },
		Info: { type: AbilityType }
	})
})

export const ChampionSkinsType = new GraphQLObjectType({
	name: 'ChampionSkinsType',
	fields: () => ({
		champion_id: { type: GraphQLInt },
		champion_name: { type: GraphQLString },
		rarity: { type: GraphQLString },
		skin_id1: { type: GraphQLInt },
		skin_id2: { type: GraphQLInt },
		skin_name: { type: GraphQLString },
		skin_name_english: { type: GraphQLString },
		ret_msg: { type: GraphQLString }
	})
})

export const ChampionType = new GraphQLObjectType({
	name: 'ChampionType',
	fields: () => ({
		Ability1: { type: GraphQLString },
		Ability2: { type: GraphQLString },
		Ability3: { type: GraphQLString },
		Ability4: { type: GraphQLString },
		Ability5: { type: GraphQLString },
		AbilityId1: { type: GraphQLInt },
		AbilityId2: { type: GraphQLInt },
		AbilityId3: { type: GraphQLInt },
		AbilityId4: { type: GraphQLInt },
		AbilityId5: { type: GraphQLInt },
		Ability_1: { type: AbilityType },
		Ability_2: { type: AbilityType },
		Ability_3: { type: AbilityType },
		Ability_4: { type: AbilityType },
		Ability_5: { type: AbilityType },
		ChampionAbility1_URL: { type: GraphQLString },
		ChampionAbility2_URL: { type: GraphQLString },
		ChampionAbility3_URL: { type: GraphQLString },
		ChampionAbility4_URL: { type: GraphQLString },
		ChampionAbility5_URL: { type: GraphQLString },
		ChampionCard_URL: { type: GraphQLString },
		ChampionIcon_URL: { type: GraphQLString },
		Cons: { type: GraphQLString },
		Health: { type: GraphQLInt },
		Lore: { type: GraphQLString },
		Name: { type: GraphQLString },
		OnFreeRotation: { type: GraphQLString },
		Pantheon: { type: GraphQLString },
		Pros: { type: GraphQLString },
		Roles: { type: GraphQLString },
		Speed: { type: GraphQLInt },
		Title: { type: GraphQLString },
		Type: { type: GraphQLString },
		abilityDescription1: { type: GraphQLString },
		abilityDescription2: { type: GraphQLString },
		abilityDescription3: { type: GraphQLString },
		abilityDescription4: { type: GraphQLString },
		abilityDescription5: { type: GraphQLString },
		id: { type: GraphQLInt },
		latestChampion: {
			type: GraphQLBoolean,
			async resolve({ latestChampion }) {
				return latestChampion === 'y'
			}
		},
		ret_msg: { type: GraphQLString },
		Abilities: {
			type: new GraphQLList(ChampionAbilityType),
			resolve(champion) {
				return getChampionAbilities(champion)
			}
		}
	})
})
