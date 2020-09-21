<template>
  <div class="sidebar">
    <div class="sidebar__icon">
      <i @click="goHome" class="material-icons mr-10 md-48 cursor-pointer">whatshot</i>
    </div>
    <div class="sidebar__routes">
      <template v-if="routes && routes.length">
        <nuxt-link class="sidebar__routes__item ui-large-text" :to="item.route" v-for="(item, key) in routes" :key="key">
          <i class="material-icons mr-10 md-24">{{ item.icon }}</i><span>{{ item.name }}</span>
        </nuxt-link>
      </template>
    </div>
    <div class="sidebar__new-post">
      <u-i-button :icon="''" :disabled="false" :is-rectangular="false" :is-small="false" :text="'Новый пост'" @method="newPostMethod" />
    </div>
  </div>
</template>

<script>
import UIButton from "@/components/UIButton";
import routeList from "@/data/route-data";
export default {
  name: "Sidebar",
  components: {UIButton},
  data() {
    return {
      routes: routeList
    }
  },
  methods: {
    newPostMethod() {
      console.log("new post")
    },
    goHome() {
      this.$router.push("/")
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/sidebar-styles";
</style>
