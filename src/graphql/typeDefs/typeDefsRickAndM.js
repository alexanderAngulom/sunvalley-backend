const { gql } = require('apollo-server-express');

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
  type episode{
    name:String!
    episode:String!
  }
  type Episodes{
    results:[episode]
  }

  type Characters {
    info: CharacterInfo
    results: [Character]
  }

  type Query {
    characters: Characters
    episodes:Episodes
  }
`;

module.exports = typeDefs;
