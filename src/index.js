import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema'
import config from './config'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: config.apolloKey
	},
  introspection: true
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
