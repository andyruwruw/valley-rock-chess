<template>
  <div
    :class="$style.component"
    :style="`background: ${color};`"
    class="elevation-3"
    @click="handleClick"
    @keyup="handleClick">
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
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(50% - .5rem);
  margin: .5rem 0 0;
  height: 200px;
  border-radius: 1rem;
}

.text {
  color: white;
}
</style>
