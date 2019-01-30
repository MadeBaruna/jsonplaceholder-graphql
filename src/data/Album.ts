import Api from './Api';

export default class Album extends Api {
  public async getAlbums(userId: number) {
    return this.get<IAlbum[]>(`users/${userId}/albums`);
  }
}
