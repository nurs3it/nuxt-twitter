<template>
  <div>
    <div class="tabs">
      <div class="tabs__item"
           v-for="item in tabsData"
           :key="item.id"
           @click="selectTab(item.id)"
           :class="{'tabs__item-active' : item.id === selectedTab, 'tabs__item-disabled' : false}">
        <p class="ui-button-text">{{ item.label }}</p>
      </div>
    </div>
    <div class="tabs-content">
      <template v-if="selectedTab === 0">
        <u-i-post v-for="item in posts" :key="item.id" :post="item" :user="user"/>
      </template>
      <template v-else-if="selectedTab === 1">
        <albums :user="user" :albums="albums" />
      </template>
    </div>
  </div>
</template>

<script>
import UIPost from "@/components/UIPost";
import Albums from "@/components/Albums";

export default {
  name: "Tabs",
  props: ["tabsData", "posts", "user", "albums", "todos"],
  components: {Albums, UIPost},
  data() {
    return {
      selectedTab: null
    }
  },
  created() {
    this.selectedTab = 0;
  },
  methods: {
    selectTab(id) {
      this.selectedTab = id;
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/tabs-styles";
</style>
