<template>
  <div
    :class="$style.component"
    :style="`width: ${size}px; height: ${size}px; background: ${color};`"
    class="elevation-1">
    <img
      :class="$style.content"
      :src="getImage()"
      alt="#" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import { PROFILE_COLORS } from '../../../config';

export default Vue.extend({
  name: 'profile-photo',

  props: {
    image: {
      type: String,
      default: `${Math.ceil(Math.random() * 82)}`,
    },

    color: {
      type: String,
      default: PROFILE_COLORS[Math.floor(Math.random() * PROFILE_COLORS.length)],
    },

    size: {
      type: String,
      default: '24',
    },
  },

  methods: {
    getImage() {
      const images = require.context(
        '../../../assets/images/profile',
        false,
        /\.png$/,
      );

      return images(`./${this.image}.png`);
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 100%;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
}
</style>
