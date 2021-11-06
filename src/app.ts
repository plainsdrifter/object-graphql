import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import Container from 'typedi'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env['PORT'] || 4000

const bootloader = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + '/resolvers/**/*Resolver.js'],
    emitSchemaFile: true,
    validate: false,
    container: Container,
  })
  const server = new ApolloServer({ schema })
  const app = express()
  await server.start()
  server.applyMiddleware({ app })
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready and listening at => http://localhost:${PORT}${server.graphqlPath}`),
  )
}

process.on('unhandledRejection', err => {
  console.error(err)
  process.exit(1)
})

process.on('SIGINT', () => {
  console.info('SIGINT received. Shutting down...')
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.info('SIGTERM received. Shutting down...')
  process.exit(0)
})

bootloader().catch(err => {
  console.error(err)
  process.exit(1)
})
