<template>
  <div class="ui-post" @click="showPost">
    <div class="ui-post__profile-icon" @click.stop="showUser">
      <i class="material-icons mr-10 md-48 cursor-pointer">face</i>
    </div>
    <div class="ui-post__post">
      <p class="ui-post__post__name text-bolder ui-normal-text">{{ user.name }}
        <span @click.stop="showUser" class="ui-small-text ui-post__post__login">{{ `@${user.username}` }}</span>
      </p>
      <p class="ui-post__post__title ui-large-text"><b>{{ post.title }}</b></p>
      <p class="ui-post__post__desc ui-normal-text" :class="{'line-clamp': isIndex}">{{ post.body }}</p>
      <div class="ui-post__post__action">
        <span>
          <i @click.stop="likeIt"
             class="material-icons color-silver action-like mr-10 md-24 cursor-pointer">thumb_up</i>
        </span>
        <span>
          <i @click.stop="sendIt" class="material-icons action-send color-silver mr-10 md-24 cursor-pointer">send</i>
        </span>
        <span v-if="isIndex">
          <i @click.stop="showComment" class="material-icons action-comment color-silver mr-10 md-24 cursor-pointer">comment</i>
        </span>
        <span>
          <i @click.stop="saveIt" class="material-icons color-silver mr-10 md-24 cursor-pointer">turned_in_not</i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIPost",
  props: ["post", "user", "isComment"],
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
