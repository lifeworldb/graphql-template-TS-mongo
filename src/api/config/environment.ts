const defaultPort = 4000
const defaultHostMongo = 'localhost'
const defaultPortMongo = 27017
const defaultDatabaseMongo = 'dbMongo'

interface Environment {
  apollo: {
    introspection: boolean
    playground: boolean
  }
  mongo: {
    atlas: boolean
    host: string
    port: number | string
    db: string
    user: string
    pass: string
  }
  port: number | string
  tz: string
  googleLogging: boolean
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
  },
  mongo: {
    atlas: process.env.MONGO_ATLAS === 'true',
    host: process.env.MONGO_HOST || defaultHostMongo,
    port: process.env.MONGO_PORT || defaultPortMongo,
    db: process.env.MONGO_DB || defaultDatabaseMongo,
    user: process.env.MONGO_USR || '',
    pass: process.env.MONGO_PAS || '',
  },
  port: process.env.PORT || defaultPort,
  tz: process.env.TZ || '',
  googleLogging: process.env.GOOGLE_LOGGING === 'true',
}
