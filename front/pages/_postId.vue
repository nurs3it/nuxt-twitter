<template>
  <div>
    <u-i-post :post="post" :user="findUserByUserId()" v-if="post && post.userId"/>
  </div>
</template>

<script>
import API from "../API/api.services"
import UIPost from "@/components/UIPost";
import {mapGetters} from "vuex";

export default {
  name: "_postId",
  components: {UIPost},
  data() {
    return {
      API,
      postId: this.$route.params.postId,
      post: null
    }
  },
  computed: {
    ...mapGetters({sortedUsers: 'users.store/sortedUsers'})
  },
  created() {
    API.posts.getById(this.postId).then(r => {
      if (r && r.data) {
        this.post = r.data;
      }
    });
  },
  methods: {
    findUserByUserId() {
      return this.sortedUsers.find(el => el.id === this.post.userId);
    }
  },
}
</script>

<style scoped>

</style>
