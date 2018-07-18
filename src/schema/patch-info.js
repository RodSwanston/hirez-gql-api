import { gql } from 'apollo-server-express'
import { getPatchInfo } from '../hirez'

export const PatchInfoType = gql`
	type PatchInfo {
		version_string: String
		ret_msg: String
	}

	extend type Query {
    patchInfo(type: gameType, platform: platform): [PatchInfo]
  }
`

export const PatchInfoResolvers = {
	Query: {
		async patchInfo(_, args) {
			return await getPatchInfo(args)
		}
	}
}
