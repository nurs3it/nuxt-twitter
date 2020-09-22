<template>
  <div class="profile" v-if="user && user.name">
    <div class="profile__block">
      <div class="profile__block__avatar">
        <i class="material-icons mr-10 profile__block__picture cursor-pointer">face</i>
      </div>
      <div class="profile__block__info">
        <h4 class="text-bolder">{{ user.name }}</h4>
        <small>{{ `@${user.username}` }}</small>
        <div class="ui-normal-text user-info-row">
          <i class="material-icons">local_post_office</i>
          <span>{{ user.email }}</span>
        </div>
        <div class="ui-normal-text user-info-row">
          <i class="material-icons">location_on</i>
          <span>{{ `${user.address.city}, ${user.address.street} ${user.address.suite}` }}</span>
        </div>
        <div class="ui-normal-text user-info-row">
          <i class="material-icons">stars</i>
          <span>{{ `${user.company.name}` }}</span>
        </div>
      </div>
    </div>
    <div class="profile__tabs">
      <tabs :tabs-data="tabs"
            :posts="userPosts"
            :albums="userAlbums"
            :todos="userTodos"
            ref="tabs"
            :user="user" />
    </div>
  </div>
</template>

<script>
import API from "@/API/api.services"
import Tabs from "@/components/Tabs";
import UIPost from "@/components/UIPost";

export default {
  name: "_userId",
  components: {UIPost, Tabs},
  data() {
    return {
      userId: this.$route.params.userId,
      user: null,
      userPosts: [],
      userAlbums: [],
      userTodos: [],
      tabs: [
        {
          name: "posts",
          label: "Посты",
          id: 0
        },
        {
          name: "albums",
          label: "Альбомы",
          id: 1
        }
      ]
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
