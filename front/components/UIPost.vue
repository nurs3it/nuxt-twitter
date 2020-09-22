<template>
  <div class="ui-post" @click="showPost">
    <div class="ui-post__profile-icon" @click.stop="showUser">
      <i class="material-icons mr-10 md-48 cursor-pointer">face</i>
    </div>
    <div class="ui-post__post">
      <p class="ui-post__post__title ui-large-text"><b>{{ this.post.title }}</b></p>
      <p @click.stop="showUser" class="ui-post__post__login ui-small-text">{{ `@${this.user.username}` }}</p>
      <p class="ui-post__post__desc ui-normal-text" :class="{'line-clamp': isIndex}">{{ this.post.body }}</p>
      <div class="ui-post__post__action">
        <i @click.stop="likeIt" class="material-icons mr-10 md-24 cursor-pointer">thumb_up</i>
        <i @click.stop="sendIt" class="material-icons mr-10 md-24 cursor-pointer">send</i>
        <i @click.stop="showComment" v-if="isIndex" class="material-icons mr-10 md-24 cursor-pointer">comment</i>
        <i @click.stop="saveIt" class="material-icons mr-10 md-24 cursor-pointer">turned_in_not</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIPost",
  props: ["post", "user"],
  computed: {
    isIndex() {
      return this.$route.name === 'index';
    }
  },
  methods: {
    showPost() {
      this.$router.push({
        name: "postId",
        params: {
          postId: this.post.id
        }
      })
    },
    showUser() {
      this.$router.push({
        name: "users-userId",
        params: {
          userId: this.post.userId
        }
      })
    },
    likeIt() {
      console.log('likeIt')
    },
    sendIt() {
      console.log('sendIt')
    },
    showComment() {
      console.log('showComment')
    },
    saveIt() {
      console.log('saveIt')
    },
  },
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/ui-post-styles";
</style>
