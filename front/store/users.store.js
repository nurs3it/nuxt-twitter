import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import API from "@/API/api.services";

Vue.use(Vuex)

export const state = () => ({
  allUsers: []
})

export const mutations = {
  SET_ALL_USER (state, payload) {
    state.allUsers = payload;
  }
}

export const actions = {
  async getAllUser({commit}) {
    API.user.getAll().then(r => {
      if (r && r.data) {
        commit("SET_ALL_USER", r.data);
      }
    })
  }
}

export const getters = {
  sortedUsers: (state) => {
    return state.allUsers;
  }
}
