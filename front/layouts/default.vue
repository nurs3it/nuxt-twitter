<template>
  <div class="app">
    <div class="app__menu">
      <div class="menu-layout">
        <sidebar />
      </div>
    </div>
    <div class="app__content">
      <div class="app__content__title">
        <p class="ui-subtitle pl-10 pr-10">Главная</p>
      </div>
      <div class="app__content__main">
        <Nuxt />
      </div>
    </div>
    <div class="app__recommended">
      <div class="recommended-layout">
        app__recommended
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Список Менюшек: Рекомендуемые люди, Новости(Главная)
import Sidebar from "@/components/Sidebar";
import API from "../API/api.services"
export default {
  components: {Sidebar},
  data() {
    return {
      API: API
    }
  },
  created() {
    console.log(API.posts.getAll());
  }
}
</script>
