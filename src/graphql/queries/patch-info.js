import { DEF_ARGS } from '../../utils/constants'
import { getPatchInfo } from '../../hirez'
import { PatchInfoType } from '../types'

const PatchInfo = {
	type: PatchInfoType,
	args: { ...DEF_ARGS },
	async resolve(_, args) {
		return await getPatchInfo(args)
	}
}

export default {
	PatchInfo
}
