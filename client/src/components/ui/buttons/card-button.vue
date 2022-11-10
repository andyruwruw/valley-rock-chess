<template>
  <div :class="$style.component">
    <slot name="default" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'card-button',
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
