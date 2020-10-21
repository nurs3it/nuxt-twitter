<template>
  <div class="albums">
    <div class="albums__item" v-for="item in albums" :key="item.id">
      <div class="albums__item__title">
        <p class="ui-subtitle">{{ item.title }}</p>
      </div>
      <div class="albums__item__goto">
        <u-i-button :text="'Просмотреть альбом'" :is-small="true" />
      </div>
    </div>
  </div>
</template>

<script>
import UIButton from "@/components/UIButton";
export default {
  name: "Albums",
  components: {UIButton},
  props: ["albums", "user"]
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/albums-styles";
</style>
