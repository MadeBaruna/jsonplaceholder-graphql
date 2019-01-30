import Api from './Api';

export default class Comment extends Api {
  public async getComments(postId: number) {
    return this.get<IComment[]>(`posts/${postId}/comments`);
  }

  public async createComment(postId: number, name: string, email: string, body: string) {
    return this.post<IComment>('comments', {
      postId,
      name,
      email,
      body,
    });
  }

  public async updateComment(id: number, name: string, email: string, body: string) {
    return this.patch<IComment>(`comments/${id}`, {
      name,
      email,
      body,
    });
  }

  public async deleteComment(id: number) {
    await this.delete<ICommentDeleteResponse>(`comments/${id}`);
    return { id };
  }
}
