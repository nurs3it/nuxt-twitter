import Vue from 'vue'
import Vuex from 'vuex'
import API from "@/API/api.services"

Vue.use(Vuex)

export const state = () => ({
  allAlbums: []
})

export const mutations = {
  SET_ALL_ALBUMS(state, payload) {
    state.allAlbums = payload;
  }
}

export const actions = {
  async getAllAlbums({commit}) {
    API.albums.getAll().then(r => {
      if (r && r.data) {
        commit("SET_ALL_ALBUMS", r.data);
      }
    })
  }
}

export const getters = {
  sortedAlbums (state) {
    return state.allAlbums.sort((a, b) => b.id - a.id)
  }
}
