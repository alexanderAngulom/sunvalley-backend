const { gql } = require('apollo-server-express');

// Define el esquema GraphQL
const typeDefs = gql`
  type Location {
    name: String
  }

  type Origin {
    name: String
  }

  type Character {
    id: ID!
    name: String!
    status: String!
    species: String
    type: String
    gender: String
    image: String!
    location: Location
    origin: Origin
  }

  type CharacterInfo {
    count: Int
  }

  type Characters {
    info: CharacterInfo
    results: [Character]
  }

  type Query {
    characters: Characters
  }
`;

module.exports = typeDefs;
