<template>
  <div class="ui-post">
    <div class="ui-post__profile-icon">
      <i class="material-icons mr-10 md-48 cursor-pointer">face</i>
    </div>
    <div class="ui-post__post">
      <div class="ui-post__post__title ui-subtitle">Title</div>
      <div class="ui-post__post__login ui-small-text">@web_dev</div>
      <div class="ui-post__post__desc ui-normal-text">
        Вышла PostCSS 8.0 «Президент Осе»: новый API, более быстрый и надёжный парсер, поддержка TypeScript, новый сайт с документацией и другие изменения
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "UIPost"
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/ui-post-styles";
</style>
