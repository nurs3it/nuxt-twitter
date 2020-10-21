<template>
  <div class="search">
    <input v-model="searchStr" type="text" class="ui-input search__input" placeholder="Введите для поиска">
    <div class="search__list" :class="{ 'search__list-active': searchStr.length }">
      <p class="ui-large-text" v-if="filteredUsers && filteredUsers.length">Пользователи</p>
      <div class="search__list__users mb-10" v-if="filteredUsers && filteredUsers.length">
        <div class="search__list__users__item" v-for="user in filteredUsers" :key="`user${user.id}`" @click="gotoUser(user.id)">
          <div class="search__list__users__item-icon">
            <i class="material-icons md-24 cursor-pointer">face</i>
          </div>
          <div class="search__list__users__item-name">
            <p class="ui-normal-text">{{ user.name }}</p>
            <small class="ui-small-text">{{ `@${user.username}` }}</small>
          </div>
        </div>
      </div>

      <p class="ui-large-text" v-if="filteredAlbums && filteredAlbums.length">Альбомы</p>
      <div class="search__list__albums" v-if="filteredAlbums && filteredAlbums.length" >
        <div class="search__list__albums__item" v-for="album in filteredAlbums" :key="`album${album.id}`" @click="gotoAlbum(album.id)">
          <div class="search__list__albums__item-name">
            <p class="ui-normal-text">{{ album.title }}</p>
          </div>
        </div>
      </div>

      <div class="search__list__albums"></div>
      <div class="search__list__posts"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import API from "@/API/api.services"
export default {
  name: "SearchComponent",
  data() {
    return {
      searchStr: "",
      filteredAlbums: [],
      filteredPosts: [],
      filteredUsers: []
    }
  },
  watch: {
    "searchStr" () {
      this.filter();
      if (!this.searchStr.length) {
        this.init();
      }
    }
  },
  computed: {
    ...mapGetters({
      users: "users.store/sortedUsers",
      posts: "posts.store/sortedPosts",
      albums: "albums.store/sortedAlbums"
    })
  },
  async mounted() {
    await this.init();
  },
  methods: {
    async init() {
      this.filteredAlbums = (await API.albums.getAll()).data;
      this.filteredPosts = (await API.posts.getAll()).data;
      this.filteredUsers = (await API.users.getAll()).data;
    },
    filter() {
      this.filteredAlbums = this.albums.filter(el => {
        if (el.title.includes(this.searchStr)) {
          return el;
        }
      });
      this.filteredPosts = this.posts.filter(el => {
        if (el.title.includes(this.searchStr)) {
          return el;
        }
      });
      this.filteredUsers = this.users.filter(el => {
        if (el.name.includes(this.searchStr)) {
          return el;
        }
      });
    },
    gotoUser(id) {
      this.$router.push({
        name: "users-userId",
        params: {
          userId: id
        }
      })
    },
    gotoAlbum(id) {
      this.$router.push({
        name: "albums-albumId",
        params: {
          albumId: id
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/search-styles";
input:focus + .search__list {
  width: 100%;
  height: max-content !important;
  opacity: 1 !important;
  display: block;
  padding: 10px;
}

.search__list-active {
  width: 100%;
  height: max-content !important;
  opacity: 1 !important;
  display: block;
  padding: 10px;
}
</style>
