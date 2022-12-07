<template>
  <div
    :class="$style.component"
    :style="`background: ${color};`"
    class="elevation-3"
    @click="handleClick"
    @keyup="handleClick">
    <img
      :class="$style.content"
      :src="getImage()"
      alt="#" />

    <span :class="$style.text">
      {{ text }}
    </span>

    <slot name="default" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'card-button',

  props: {
    text: {
      type: String,
      default: 'Button',
    },

    color: {
      type: String,
      default: '#A5236E',
    },

    image: {
      type: String,
      default: '1',
    },
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },

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
  width: calc(50% - .5rem);
  margin: .5rem 0 0;
  height: 200px;
  border-radius: 1rem;

  &:active {
    background: black;
  }
}

.text {
  color: rgba(255, 255, 255, 0.571);
  text-transform: uppercase;
}

.content {
  display: flex;
  width: 69%;
  margin-bottom: .9rem;
}
</style>
