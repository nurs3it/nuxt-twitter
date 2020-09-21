<template>
  <button class="ui-button"
          :class="[{ 'rectangular-button': isRectangular }, { 'small-button': isSmall }]"
          @click="disabled ? null : $emit('method')"
          :disabled="disabled ? disabled : false"
  >
    <p class="ui-button-text" style="z-index: 3">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: "UIButton",
  props: ['disabled', 'text', 'isRectangular', 'isSmall']
}
</script>

<style scoped>

</style>
