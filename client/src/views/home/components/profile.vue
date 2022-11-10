<template>
  <div :class="$style.component">
    <img
      :class="$style.image"
      :src="image"
      alt="#" />
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'home-profile',

  computed: {
    ...mapGetters('user', [
      'getUser',
    ]),

    username() {
      return this.getUser.username;
    },

    image() {
      if (this.getUser.image) {
        return this.getUser.image;
      }
      return 'https://raw.githubusercontent.com/andyruwruw/valley-rock-chess/main/client/src/assets/images/chess_1.png';
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: space-between;
}

.username {
  color: white;
  font-weight: 100;
  font-size: 1.3rem;
  margin-right: .5rem;
}

.image {
  display: block;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.317);
  border-radius: 100%;
}
</style>
