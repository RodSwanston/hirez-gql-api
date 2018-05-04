import express from 'express'
import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'
import cors from 'cors'
import schema from './graphql'
import config from './config'
import { logger } from './utils'

const app = express()
const PORT = config.port

const corsOptions = {
	origin(origin, callback) {
    if (config.urls.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback('Not allowed by CORS')
    }
  }
}

app.use(bodyParser.json())

app.use('*', (req, res, next) => {
	if (Object.keys(req.body).length === 0) {
		req.headers.origin = req.headers.origin || req.headers.host
	} else {
		logger.error(req.headers.origin)
	}
	next()
})

app.use(cors(corsOptions))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: config.graphiql
}))

app.use('/', (req, res) => {
	res.json('Go to /graphql to test the queries!')
})

app.listen(PORT, () => {
	const URL = `http://localhost:${PORT}`
  logger.info(`\n\nExpress: ${URL}\n\nGraphql: ${URL}/graphql\n\n`)
})
