<template>
  <div>
    <u-i-post :post="post" :user="findUserByUserId(post.userId)" v-for="post in sortedPosts" :key="post.id"
              v-if="post && post.userId"/>
  </div>
</template>

<script>
import UIPost from "@/components/UIPost";
import {mapGetters} from "vuex"

export default {
  components: {UIPost},
  computed: {
    ...mapGetters({sortedPosts: 'posts.store/sortedPosts', sortedUsers: 'users.store/sortedUsers'})
  },
  methods: {
    findUserByUserId(id) {
      return this.sortedUsers.find(el => el.id === id);
    }
  },
}
</script>
