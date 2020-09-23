<template>
  <div class="albums-page">
    <div class="albums-page__title">
      <p class="ui-subtitle">Альбомы</p>
    </div>
    <div class="albums-page__filter">
      <div class="mr-10">
        <input v-model="searchStr"
               placeholder="Введите для поиска"
               type="text"
               class="ui-input">
      </div>
      <div @click="sortByAlph" class="filter-icon mr-10 cursor-pointer"><i class="material-icons md-36">sort_by_alpha</i></div>
      <div @click="softById" class="filter-icon cursor-pointer"><i class="material-icons md-36">sort</i></div>
    </div>
    <div class="albums-page__list">
      <albums :albums="filteredAlbums"/>
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
      filteredAlbums: [],
      searchStr: ""
    }
  },
  watch: {
    async "searchStr" () {
      this.searchAlbum();
      if (!this.searchStr.length) {
        this.filteredAlbums = (await API.albums.getAll()).data
      }
    }
  },
  async created() {
    this.albums = (await API.albums.getAll()).data
    this.filteredAlbums = this.albums;
  },
  methods: {
    searchAlbum() {
      this.filteredAlbums = this.albums.filter(el => {
        if (el.title.includes(this.searchStr)) {
          return el;
        }
      });
    },
    sortByAlph() {
      this.filteredAlbums = this.filteredAlbums.sort((a, b) => a.title.localeCompare(b.title))
    },
    softById() {
      this.filteredAlbums = this.filteredAlbums.sort((a, b) => b.id - a.id)
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/albums-page-styles";
</style>
