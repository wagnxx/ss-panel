import { provide } from 'inversify-binding-decorators';
@provide('api')
class ApiService {
  async getList() {
    return {
      a: 1,
      b: 3,
    };
  }
  async getSSList() {
    return [{ id: 1, sname: 'ss1', location: 'tokeyo' }];
  }
}

export default ApiService;
