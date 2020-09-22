import axios from "axios";
const url = "https://jsonplaceholder.typicode.com"
export default {
  posts: {
    getAll() {
      return axios.get(url + '/posts/');
    },
    getById(id) {
      return axios.get(url + '/posts/' + id);
    },
    creat(data) {
      return axios.post(url + '/posts/', data);
    },
    change(id, data) {
      return axios.put(url + '/posts/' + id, data)
    },
    delete(id) {
      return axios.delete(url + '/posts/' + id)
    },
    filterByUser(userId) {
      return axios.get(url + '/posts?userId=' + userId)
    }
  },
  user: {
    getAll() {
      return axios.get(url + '/users/');
    },
    getById(id) {
      return axios.get(url + '/users/' + id);
    },
    getAlbums(userId) {
      return axios.get(url + '/users/' + userId + '/albums')
    },
    getTodos(userId) {
      return axios.get(url + '/users/' + userId + '/todos')
    },
    getPosts(userId) {
      return axios.get(url + '/users/' + userId + '/posts')
    }
  },
  albums: {
    getPhotos(albumId) {
      return axios.get(url + '/albums/' + albumId + '/photos')
    }
  }
}
