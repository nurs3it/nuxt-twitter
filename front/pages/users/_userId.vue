<template>
  <div class="profile" v-if="user && user.name">
    <div class="profile__avatar"></div>
    <div class="profile__names">
      <p class="ui-subtitle">{{ user.name }}</p>
      <small class="ui-small-text">{{ `@${user.username}` }}</small>
    </div>
  </div>
</template>

<script>
import API from "@/API/api.services"

export default {
  name: "_userId",
  data() {
    return {
      userId: this.$route.params.userId,
      user: null,
      userPosts: [],
      userAlbums: [],
      userTodos: []
    }
  },
  async created() {
    this.user = (await API.user.getById(this.userId)).data;
    this.userPosts = (await API.user.getPosts(this.userId)).data;
    this.userAlbums = (await API.user.getAlbums(this.userId)).data;
    this.userTodos = (await API.user.getTodos(this.userId)).data;
    this.userAlbums.map(async (elem) => {
      elem.photos = (await API.albums.getPhotos(elem.id)).data
    });
  }
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/profile-styles";
</style>
