import Api from './Api';

export default class Photo extends Api {
  public async getPhotos(id: number) {
    return this.get<IPhoto[]>(`albums/${id}/photos`);
  }

  public async getFirstThumbnail(id: number) {
    const data = await this.get<IPhoto[]>(`albums/${id}/photos?limit=1`);
    return data[0].thumbnailUrl;
  }
}
