<template>
  <div :class="$style.component">
    <v-icon dark>
      mdi-home
    </v-icon>

    <span :class="$style.title">
      Home
    </span>

    <profile />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import Profile from './profile.vue';

export default Vue.extend({
  name: 'home-toolbar',

  components: {
    Profile,
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: .5rem 0 2rem;
}

.title {
  color: white;
  font-weight: 100;
  font-size: 1.3rem;
}

.image {
  display: block;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.317);
  border-radius: 100%;
}
</style>
