import axios from "axios";

const backendUrl = "http://localhost:8082";

class ApiService {
  static setAuthorizationToken(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  static removeAuthorizationToken() {
    delete axios.defaults.headers.common["Authorization"];
  }

  static post(endpoint, data) {
    const url = `${backendUrl}/${endpoint}`;
    return axios.post(url, data);
  }

  static get(endpoint, params) {
    const url = `${backendUrl}/${endpoint}`;
    return axios.get(url, { params });
  }
}

export default ApiService;
