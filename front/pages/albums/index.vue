<template>
  <div class="albums-page">
    <div class="albums-page__title">
      <p class="ui-subtitle">Альбомы</p>
    </div>
    <div class="albums-page__filter">
      <div class="mr-10"><input v-model="searchStr" @keyup="searchAlbum" placeholder="Введите для поиска" type="text"
                                class="ui-input"></div>
      <div class="filter-icon mr-10 cursor-pointer"><i class="material-icons md-36">sort_by_alpha</i></div>
      <div class="filter-icon cursor-pointer"><i class="material-icons md-36">sort</i></div>
    </div>
    <div class="albums-page__list">
      <albums :albums="albums"/>
    </div>
  </div>
</template>

<script>
import API from "@/API/api.services"
import Albums from "@/components/Albums";

export default {
  name: "index",
  components: {Albums},
  data() {
    return {
      albums: [],
      searchStr: ""
    }
  },
  watch: {
    async "searchStr" () {
      if (!this.searchStr.length) {
        this.albums = (await API.albums.getAll()).data
      }
    }
  },
  async created() {
    this.albums = (await API.albums.getAll()).data
  },
  methods: {
    searchAlbum() {
      this.albums = this.albums.find(el => el.title.toLowerCase().includes(this.searchStr.toLowerCase()));
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/albums-page-styles";
</style>
