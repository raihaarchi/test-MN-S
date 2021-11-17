import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://framework.team/api/',
});

const request = {
  get(endpoint) {
    return instance.get(`${endpoint}`);
  },
  put(endpoint, edits) {
    return instance.put(`${endpoint}`, edits);
  },
  patch(endpoint, edits) {
    return instance.patch(`${endpoint}`, edits);
  },
  delete(endpoint) {
    return instance.delete(`${endpoint}`);
  },
  post(endpoint, data) {
    return instance.post(`${endpoint}/`, data);
  },
};

export default request;
