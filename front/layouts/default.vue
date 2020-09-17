<template>
  <div class="app">
    <div class="app__menu">
      <div class="app__menu__left-block menu-wrappers">
        <div class="app__menu__icon">ICON</div>
        <div class="app__menu__search-input"><input type="text"></div>
        <div class="app__menu__add-btn"><button>Новая запись</button></div>
      </div>
      <div class="app__menu__right-block menu-wrappers"></div>
    </div>
    <div class="app__content">
      <Nuxt/>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/global-styles/reset";
@import "assets/global-styles/main";
</style>
