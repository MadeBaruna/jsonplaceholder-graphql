import dotenv from 'dotenv';
dotenv.config();

import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import Post from './data/Post';
import User from './data/User';
import Comment from './data/Comment';
import Album from './data/Album';
import Photos from './data/Photo';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Post: new Post(),
    User: new User(),
    Comment: new Comment(),
    Albums: new Album(),
    Photos: new Photos(),
  }),
});

server.listen(5001).then(({ url }) => {
  console.log(`GraphQL playground: ${url}`); // tslint:disable-line
});
