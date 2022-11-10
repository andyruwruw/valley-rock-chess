<template>
  <div :class="$style.component">
    <profile-photo
      :image="getUser.image"
      :color="getUser.color"
      size="32" />
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

// Local Imports
import ProfilePhoto from '../../../components/ui/image/profile-photo.vue';

export default Vue.extend({
  name: 'home-profile',

  components: {
    ProfilePhoto,
  },

  computed: {
    ...mapGetters('user', [
      'getUser',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: space-between;
}
</style>
