import dotenv from 'dotenv'
dotenv.config()

const config = {
	port: process.env.PORT || 4000,
	platform: process.env.DEF_PLATFORM || 'pc',
	type: process.env.DEF_TYPE || 'paladins',
	nodeEnv: process.env.NODE_ENV || 'dev',
	devId: process.env.DEV_ID || 0,
	authKey: process.env.AUTH_KEY || '',
	apolloKey:  process.env.APOLLO_KEY || ''
}

export default config
