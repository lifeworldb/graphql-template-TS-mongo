import 'graphql-import-node'
import { loadFiles } from '@graphql-toolkit/file-loading'
import { mergeResolvers } from '@graphql-toolkit/schema-merging'
import { join } from 'path'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'

const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts'

const typeDefs = loadFiles(join(__dirname, 'graphql/schemas', '**/*.graphql'))
const resolvers = mergeResolvers(loadFiles(join(__dirname, 'graphql/resolvers', `**/*.${ext}`)))

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
