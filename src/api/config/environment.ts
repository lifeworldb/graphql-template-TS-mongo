const defaultPort = 4000
const defaultHostMongo = 'localhost'
const defaultPortMongo = 27017
const defaultDatabaseMongo = 'dbMongo'

interface Environment {
  apollo: {
    introspection: boolean
    playground: boolean
  }
  mongoHost: string
  mongoPort: number | string
  mongoDb: string
  port: number | string
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
  },
  mongoHost: process.env.MONGO_HOST || defaultHostMongo,
  mongoPort: process.env.MONGO_PORT || defaultPortMongo,
  mongoDb: process.env.MONGO_DB || defaultDatabaseMongo,
  port: process.env.PORT || defaultPort,
}
