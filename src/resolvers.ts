export const resolvers = {
  Query: {
    post: (_, { id }, { dataSources }) => dataSources.Post.getPost(id),
    posts: (_, __, { dataSources }) => dataSources.Post.getPosts(),
    postsByUser: (_, { userId }, { dataSources }) =>
      dataSources.Post.getPostsByUser(userId),
    user: (_, { id }, { dataSources }) => dataSources.User.getUser(id),
    users: (_, __, { dataSources }) => dataSources.User.getUsers(),
    comments: (_, { postId }, { dataSources }) =>
      dataSources.Comment.getComments(postId),
    albums: (_, { userId }, { dataSources }) =>
      dataSources.Albums.getAlbums(userId),
  },
  Mutation: {
    post: (_, { userId, title, body }, { dataSources }) =>
      dataSources.Post.createPost(userId, title, body),
    updatePost: (_, { id, userId, title, body }, { dataSources }) =>
      dataSources.Post.updatePost(id, userId, title, body),
    deletePost: (_, { id }, { dataSources }) => dataSources.Post.deletePost(id),
    comment: (_, { postId, name, email, body }, { dataSources }) =>
      dataSources.Comment.createComment(postId, name, email, body),
    updateComment: (_, { id, name, email, body }, { dataSources }) =>
      dataSources.Comment.updateComment(id, name, email, body),
    deleteComment: (_, { id }, { dataSources }) =>
      dataSources.Comment.deleteComment(id),
  },
  User: {
    posts: ({ id }, _, { dataSources }) => dataSources.Post.getPostsByUser(id),
  },
  Post: {
    comments: ({ id }, _, { dataSources }) =>
      dataSources.Comment.getComments(id),
  },
  Album: {
    thumbnail: ({ id }, _, { dataSources }) => dataSources.Photos.getFirstThumbnail(id),
    photos: ({ id }, _, { dataSources }) => dataSources.Photos.getPhotos(id),
  },
};
