<template>
  <div class="app">
    <div class="app__menu">
      <sidebar />
    </div>
    <div class="app__content">
      <div class="app__content__title">
        <p class="ui-subtitle">Главная</p>
      </div>
      <div class="app__content__main">
        <Nuxt />
      </div>
    </div>
    <div class="app__recommended"></div>
  </div>
</template>

<script>
// TODO: Список Менюшек: Рекомендуемые люди, Новости(Главная)
import Sidebar from "@/components/Sidebar";
export default {
  components: {Sidebar}
}
</script>
