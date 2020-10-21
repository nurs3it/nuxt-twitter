<template>
  <div class="recommended-people">
    <div class="recommended-people__title">
      <p class="ui-large-text"><b>Кого читать</b></p>
    </div>
    <div class="recommended-people__list">
      <div class="recommended-people__list__item" v-for="item in users" :key="item.id" @click="showUser(item)">
        <div class="recommended-people__list__item__icon">
          <i class="material-icons mr-10 md-48 cursor-pointer">face</i>
        </div>
        <div class="recommended-people__list__item__info user-name">
          <div class="user-name__name">
            <p class="ui-large-text text-bolder">{{ item.name }}</p>
            <small class="ui-small-text">{{ item.email }}</small>
            <p class="ui-normal-text">{{ `@${item.username}` }}</p>
          </div>
          <div class="user-name__btn">
            <u-i-button :text="'Подписаться'" :is-small="true"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/API/api.services"
import UserInRecommended from "@/components/UserInRecommended";
import UIButton from "@/components/UIButton";

export default {
  name: "recommended-people",
  components: {UIButton, UserInRecommended},
  data() {
    return {
      API,
      users: []
    }
  },
  async created() {
    this.users = this.$store.getters["users.store/sortedUsers"] ? this.$store.getters["users.store/sortedUsers"] : (await API.user.getAll()).data
  },
  methods: {
    showUser(item) {
      this.$router.push({
        name: "users-userId",
        params: {
          userId: item.id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/local-styles/recommended-people-styles";
</style>
