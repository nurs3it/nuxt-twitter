<template>
  <div class="comments">
    <div class="comments__item" v-for="item in comments" :key="item.id">
      <div class="comments__item__icon">
        <i class="material-icons mr-10 md-48 cursor-pointer">face</i>
      </div>
      <div class="comments__item__post">
        <p class="ui-normal-text comments__item__post__name"><b>{{ item.name }}</b></p>
        <p class="ui-small-text mb-10">{{ ` @${item.email}` }}</p>
        <p class="ui-normal-text mb-10">
          {{ item.body }}
        </p>
        <div class="comments__item__post__action">
          <i @click.stop="likeIt"
             class="material-icons color-silver action-like mr-10 md-24 cursor-pointer">thumb_up</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../API/api.services"

export default {
  name: "Comment",
  props: ["postId"],
  data() {
    return {
      comments: []
    }
  },
  created() {
    API.comment.getCommentsByPostId(this.postId).then(r => {
      if (r && r.data) {
        this.comments = r.data;
      }
    });
  },
  methods: {
    likeIt() {
      console.log("likeIt")
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/comments-styles.scss";
</style>
