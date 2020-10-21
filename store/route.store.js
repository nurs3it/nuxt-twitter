import Vue from 'vue'
import Vuex from 'vuex'
import routeList from "@/data/route-data";

Vue.use(Vuex)

const routeStore = () =>
  new Vuex.Store({
    state: {
      routes: routeList
    },
    mutations: {},
    actions: {},
    getters: {
      current: () => {
        console.log($nuxt._router)
        return true
      }
    }
  })

export default routeStore;
