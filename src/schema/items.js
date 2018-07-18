import { gql } from 'apollo-server-express'
import { getItems } from '../hirez'

export const ItemType = gql`
	type Item {
		IconId: Int
		ItemId: Int
		Price: Int
		champion_id: Int
		talent_reward_level: Int
		Description: String
		DeviceName: String
		ShortDesc: String
		itemIcon_URL: String
		item_type: String
		ret_msg: String
	}

	extend type Query {
    items(languageCode: lang!, type: gameType, platform: platform): [Item]
    championItem(championId: Int!, languageCode: lang!, type: gameType, platform: platform): [Item]
  }
`

export const ItemdResolvers = {
	Query: {
		async items(_, args) {
			return await getItems(args)
		},
		async championItem(_, args) {
			return await getItems(args)
		}
	}
}
