const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('../graphql/resolvers/schema');
const typeDefs = require('../graphql/typeDefs/typeDefsRickAndM');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const router = express.Router();
const server = new ApolloServer({ 
  typeDefs:typeDefs, 
  resolvers:resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const graphqlPath = '/rick-and-morty'; 
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app: router, path: graphqlPath });
}

startApolloServer().catch(error => {
  console.error('Error starting Apollo server:', error);
});

module.exports = router;
