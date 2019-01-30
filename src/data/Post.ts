import Api from './Api';

export default class Post extends Api {
  public async getPosts() {
    return this.get<IPost[]>('posts');
  }

  public async getPostsByUser(userId: number) {
    return this.get<IPost[]>('posts', {
      userId,
    });
  }

  public async getPost(id: number) {
    return this.get<IPost>(`posts/${id}`);
  }

  public async createPost(userId: number, title: string, body: string) {
    return this.post<IPost>('posts', {
      userId,
      title,
      body,
    });
  }

  public async updatePost(
    id: number,
    userId: number,
    title: string,
    body: string,
  ) {
    return this.patch<IPost>(`posts/${id}`, {
      userId,
      title,
      body,
    });
  }

  public async deletePost(id: number) {
    await this.delete<IPostDeleteResponse>(`posts/${id}`);
    return { id };
  }
}
