import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import depthLimit from 'graphql-depth-limit'

import { environment } from '@config/environment'
import schema from './schema'

const { setup } = require('./config/server')

const app = express()
const main = new ApolloServer({
  schema,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.introspection,
  validationRules: [depthLimit(7)],
})

app.use('*', cors())
app.use(compression())
main.applyMiddleware({
  app,
})

const httpServer = createServer(app)

setup
  .run()
  .then(() => {
    httpServer.listen({ port: environment.port }, (): void => console.log(`🚀  Server ready at ${main.graphqlPath}. `))
  })
  .catch(() => {
    process.exit(1)
  })
