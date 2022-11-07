<template>
  <v-app>
    <div :class="$style.component">
      <v-main>
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style lang="scss" module>
.component {
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: .5rem;
  background-color: #202128;
  background: radial-gradient(
    circle at 70% 90%,
    rgb(62, 26, 103) 0%,
    rgba(40,35,53,1) 50%,
    rgba(32,33,40,1) 100%);
  max-width: 450px;
  max-height: 900px;
}
</style>
