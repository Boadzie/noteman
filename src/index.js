const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = process.env.PORT || 4000;

let notes = [
  {
    id: '1',
    content: 'This is a note',
    author: 'Adam Scott'
  },
  {
    id: '2',
    content: 'This is another note',
    author: 'Harlow Everly'
  },
  {
    id: '3',
    content: 'Oh hey look, another note!',
    author: 'Riley Harrison'
  }
];

const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    newNote(content: String!): Note!
  }
`;

// our resolver
const resolvers = {
  Query: {
    hello: () => 'I love GraphQL!',
    notes: () => notes,
    note: (parent, args) => {
      return notes.find(note => note.id === args.id);
    }
  },

  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Boadzie Daniel'
      };
      notes.push(noteValue);
      return noteValue;
    }
  }
};

// set up server
const server = new ApolloServer({ typeDefs, resolvers });

// add middleware
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => {
  console.log(`GraphQL Server running on ${port} ${server.graphqlPath}`);
});
