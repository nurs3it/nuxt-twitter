import api from "./api.methods"
export default {
  posts: {
    getAll() {
      return api.get('posts/');
    },
    getById(id) {
      return api.get('posts/' + id);
    },
    creat(data) {
      return api.post('posts/', data);
    },
    change(id, data) {
      return api.put('posts/' + id, data)
    },
    delete(id) {
      return api.delete('posts/' + id)
    },
    filterByUser(userId) {
      return api.get('posts?userId=' + userId)
    }
  },
  user: {
    getAll() {
      return api.get('users/');
    }
  }
}
