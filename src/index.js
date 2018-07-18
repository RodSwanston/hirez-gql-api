import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { logger } from './utils'
import { typeDefs, resolvers } from './schema'
import config from './config'

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: config.apolloKey
	},
  introspection: true
})

app.use(cors())

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: config.port }, () => {
	logger.info(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`)
})
