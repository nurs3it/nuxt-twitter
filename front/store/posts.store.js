import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import API from "@/API/api.services"
Vue.use(Vuex)

export const state = () => ({
  allPost: []
})

export const mutations = {
  SET_ALL_POST(state, payload) {
    state.allPost = payload;
  }
}

export const actions = {
  async getAllPost({commit}) {
    API.posts.getAll().then(r => {
      if (r && r.data) {
        commit("SET_ALL_POST", r.data);
      }
    })
  }
}

export const getters = {
  sortedPosts: (state) => {
    return state.allPost.sort((a, b) => b.id - a.id)
  }
}
