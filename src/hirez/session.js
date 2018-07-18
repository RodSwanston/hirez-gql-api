import axios from 'axios'
import { ApolloError } from 'apollo-server-express'
import config from '../config'
import {
	genUrl, logger,
	strHasError, jsonFile,
	getRetMsg
} from '../utils'

export class SessionApi {

  constructor (platform=config.platform, type=config.type) {
		this.devId = config.devId
		this.authKey = config.authKey
		this.type = type
		this.platform = platform
		this.sessionType = `${this.type}_${this.platform}`.toLocaleUpperCase()
		this.getSession = this.getSession.bind(this)
		this.generate = this.generate.bind(this)
		this.makeRequest = this.makeRequest.bind(this)
		this.test = this.test.bind(this)
		this.generate().then(res => {
			logger.info('Session', res)
		})
  }

  async getSession() {
		if (!process.env[this.sessionType]) {
			const session = await jsonFile()
			return JSON.parse(session)[this.sessionType]
		}
		return process.env[this.sessionType]
  }

  async generate(force=false) {
		const URL = genUrl('createsession', null, this.platform, this.type)
		const session = await this.getSession()

		if(session && !force) return { session_id: session }

		try {
			const { data: { ret_msg, session_id } } = await axios.get(URL)
			if (strHasError(ret_msg)) {
				throw new Error(ret_msg)
			}

			process.env[this.sessionType] = session_id
			await jsonFile('write', { [this.sessionType]: session_id })
			const testSession = await this.test()

			return { session_id, testSession }
		} catch (error) {
			logger.error(error)
			throw new ApolloError(error)
		}
  }

  async test() {
		const session = await this.getSession()
		const URL = genUrl('testsession', session, this.platform, this.type)

		try {
			const { data='' } = await axios.get(URL)
			if (strHasError(data)) {
				throw new Error(data)
			}
			return data
		} catch (error) {
			logger.error(error)
			return error.message
		}
  }

	async makeRequest(urlPath='', urlParams='', addProps=false) {
		const session = await this.getSession()
		const props = { platform: this.platform, type: this.type }
		const baseUrl = genUrl(urlPath, session, this.platform, this.type)
		const url = urlParams ? `${baseUrl}/${urlParams}` : baseUrl

		try {
			let { data } = await axios.get(url)
			const retMsg = getRetMsg(data) || ''

			if (retMsg.includes('Invalid session id')) {
				logger.info('Generating new session and retrying...')
				await this.generate(true)
				return await this.makeRequest(urlPath, urlParams, addProps)
			}

			if (strHasError(retMsg)) {
				throw new Error(retMsg)
			}

			if (addProps) {
				if (Array.isArray(data)) {
					data = data.map(item => ({ ...props, ...item }))
				} else if(typeof data === 'object') {
					data = { ...props, ...data }
				}
			}

			return data
		} catch (error) {
			logger.error(error.message, url)
			throw new ApolloError(error)
		}
	}
}

export const sessions = {
	paladins: {
		pc: new SessionApi('pc', 'paladins'),
		ps4: new SessionApi('ps4', 'paladins'),
		xbox: new SessionApi('xbox', 'paladins')
	},
	smite: {
		pc: new SessionApi('pc', 'smite'),
		ps4: new SessionApi('ps4', 'smite'),
		xbox: new SessionApi('xbox', 'smite')
	}
}

export default SessionApi
