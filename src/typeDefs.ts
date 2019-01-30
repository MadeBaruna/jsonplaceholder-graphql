import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Post {
    userId: Int!
    id: Int!
    title: String!
    body: String!
    comments: [Comment!]!
  }

  type PostId {
    id: Int!
  }

  type Comment {
    postId: Int!
    id: Int!
    name: String!
    email: String!
    body: String!
  }

  type CommentId {
    id: Int!
  }

  type Geo {
    lat: String!
    lng: String!
  }

  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo!
  }

  type Company {
    name: String!,
    catchPhrase: String!,
    bs: String!
  }

  type Album {
    userId: Int!
    id: Int!
    title: String!
    thumbnail: String!
    photos: [Photos!]!
  }

  type Photos {
    userId: Int!
    id: Int!
    title: String!
    url: String!
    thumbnailUrl: String!
  }

  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String!
    website: String!
    company: Company!
    posts: [Post!]!
  }

  type Query {
    post(id: Int!): Post!
    posts: [Post!]!
    postsByUser(userId: Int!): [Post!]!
    user(id: Int!): User!
    users: [User!]!
    comments: [Comment!]!
    albums(userId: Int!): [Album!]!
  }

  type Mutation {
    post(userId: Int!, title: String!, body: String!): Post!
    updatePost(id: Int!, userId: Int!, title: String!, body: String!): Post!
    deletePost(id: Int!): PostId!
    comment(postId: Int!, name: String!, email: String!, body: String!): Comment!
    updateComment(id: Int!, name: String!, email: String!, body: String!): Comment!
    deleteComment(id: Int!): CommentId!
  }
`;
