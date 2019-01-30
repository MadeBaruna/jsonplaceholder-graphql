import Api from './Api';

export default class User extends Api {
  public async getUsers() {
    return this.get<IUser[]>('users');
  }

  public async getUser(id: number) {
    return this.get<IUser>(`users/${id}`);
  }
}
