import fs from 'fs'
import { promisify } from 'util'
import moment from 'moment'
import md5 from 'md5'
import bunyan from 'bunyan'
import { URL } from './constants'
import config from '../config'

const readFileAsync = promisify(fs.readFile)

const writeFileSync = promisify(fs.writeFile)

function getUtcTime() {
  return moment.utc().format('YYYYMMDDHHmmss')
}

function authHash(urlPath) {
  return md5(`${config.devId}${urlPath}${config.authKey}${getUtcTime()}`)
}

export function genUrl(urlPath, sessionId, platform=config.platform, type=config.type) {
	const devId = config.devId
	const baseUrl = URL[type][platform]
	const hash = authHash(urlPath)
	if (!sessionId) {
		return `${baseUrl}/${urlPath}json/${devId}/${hash}/${getUtcTime()}`
	}
  return `${baseUrl}/${urlPath}json/${devId}/${hash}/${sessionId}/${getUtcTime()}`
}

export const logger = bunyan.createLogger({
	name: 'logger',
	src: true,
	serializers: {
		err: bunyan.stdSerializers.err,
	},
	streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      path: 'error.log'
    }
  ]
})

export function getRetMsg(data) {
	if (Array.isArray(data)) {
		return (data[0] || {}).ret_msg
	}
	if (typeof data === 'object') {
		return data.ret_msg
	}
	if (typeof data === 'string') {
		return data
	}
	return ''
}

export function strHasError(str='') {
	return str.includes('Exception') || str.includes('Error') || str.includes('Invalid') || str.includes('Unable')
}

export async function jsonFile(type='read', obj={}, filePath='sessions.json') {
	try {
		const data = fs.statSync(filePath) ? await readFileAsync(filePath) : '{}'

		if (type === 'read') return data

		return await writeFileSync(filePath, JSON.stringify({ ...JSON.parse(data), ...obj}))
	} catch (error) {
		if (error.code !== 'ENOENT') logger.error(error)
		return '{}'
	}

}

export function getDescendantProp(obj, desc) {
  const arr = desc.split('.')
  while (arr.length && obj) {
    obj = obj[arr.shift()]
  }
  return obj || ''
}

export const sortBy = property => (a, b) => {
	let aProp = getDescendantProp(a, property)
	let bProp = getDescendantProp(b, property)

	if (isNaN(aProp) && isNaN(bProp)) {
		aProp = aProp.toLowerCase()
		bProp = bProp.toLowerCase()
	}

	if (aProp < bProp) {
		return -1
	} else if (aProp > bProp) {
		return 1
	} else {
		return 0
	}
}
