<template>
  <div class="app">
    <div class="app__menu" @click="changeStateSidebar">
    </div>
    <div class="app__main">
      <div class="app__main__sidebar-menu" :class="{'active-left-sidebar': sidebar.left}"></div>
      <div class="app__main__content">
        <Nuxt/>
      </div>
      <div class="app__main__right-sidebar-menu" :class="{'active-right-sidebar': sidebar.right}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: {
        left: true,
        right: true
      }
    }
  },
  methods: {
    changeStateSidebar() {
      this.sidebar.right = !this.sidebar.right
    }
  },
}
</script>
