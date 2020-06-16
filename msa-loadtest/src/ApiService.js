import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/';

class ApiService {
  setData() {
    return axios.post(USER_API_BASE_URL, '/api/setting');
  }
}

export default new ApiService();
