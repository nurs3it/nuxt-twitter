<template>
  <div class="index-page">
    <u-i-post v-for="post in 100" />
  </div>
</template>

<script>
import UIPost from "@/components/UIPost";
export default {
  components: {UIPost}
}
</script>
