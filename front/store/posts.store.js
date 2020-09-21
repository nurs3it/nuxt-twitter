import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const posts = () =>
  new Vuex.Store({
    state: {
      allPost: []
    },
    mutations: {
      SET_ALL_POST(state, payload) {
        state.allPost = payload;
      }
    },
    actions: {
      getAllPost: (state) => {}
    },
    getters: {}
  })

export default posts;
