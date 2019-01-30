import { RESTDataSource } from 'apollo-datasource-rest';

export default class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }
}
