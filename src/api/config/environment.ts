const defaultPort = 4000
const defaultHostMongo = 'localhost'
const defaultPortMongo = 27017
const defaultDatabaseMongo = 'dbMongo'

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  mongo_host: string,
  mongo_port: number|string,
  mongo_db: string,
  port: number|string,
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  mongo_host: process.env.MONGO_HOST || defaultHostMongo,
  mongo_port: process.env.MONGO_PORT || defaultPortMongo,
  mongo_db: process.env.MONGO_DB || defaultDatabaseMongo,
  port: process.env.PORT || defaultPort
}
