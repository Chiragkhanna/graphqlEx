const { gql} = require('apollo-server-express');
const typeDefs = gql`
type User {
    id: Int!
    login: String!
}

type Book {
    id: Int!
    name: String!
    author: String
    price: Float
}

type Query {
    current: User
    book(id: Int!): Book
    books(author: String!): [Book]
}

type Mutation {
    register(login: String!, password: String!): String
    login(login: String!, password: String!): String
}
`;

module.exports = typeDefs;