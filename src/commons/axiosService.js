import axios from 'axios';
class AxiosService {
  constructor() {
    const instance = axios.create();
    this.instance = instance;
  }

  handleSuccess(res) {
    return res;
  }

  handleError(err) {
    return Promise.reject(err);
  }

  get(url) {
    return instance.get(url);
  }
}
export default new AxiosService();
