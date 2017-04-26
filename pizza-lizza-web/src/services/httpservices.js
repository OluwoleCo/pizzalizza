import axios from 'axios'

const baseUrl = 'http://localhost:8888';

var service = {
  get: function(url) {
    return axios.get(baseUrl + url)
    .then(function(response) {
      return response.data
    })
  },
  post: function(url, payload) {
    console.log(payload);
    return axios.post(baseUrl + url, payload)
    .then(function(response) {
      return response.data
    })
  }
}

export default service;
