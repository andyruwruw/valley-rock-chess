<template>
  <div :class="$style.component">
    <div :class="$style.header">
      <graphic />

      <span :class="$style.title">
        Valley Rock Chess
      </span>

      <span :class="$style.description">
        {{ message }}
      </span>
    </div>

    <div :class="$style.controls">
      <v-text-field
        v-model="username"
        placeholder="Username"
        background-color="transparent"
        outlined
        dense
        hide-details
        full-width
        rounded
        dark />

      <v-btn
        :disabled="!username.length"
        dark
        block
        rounded
        style="margin-top: 1rem;"
        color="#9843FF">
        Enter
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Graphic from './components/graphic.vue';

export default Vue.extend({
  name: 'login-view',

  data: () => ({
    messages: [
      'The ultimate mashup no one asked for!',
      'A totally unreasonable reason to climb.',
      'Now you have a reason for volume days, play til you can\'t.',
      'Remember not to run and still be respectful of climbers on the wall!',
      'This is most likely a very very bad idea.',
      'Now you can have two things to be worse than someone at!',
    ],

    username: '',
  }),

  components: {
    Graphic,
  },

  computed: {
    message() {
      return this.messages[Math.floor(Math.random() * this.messages.length)];
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 2rem);
}

.title {
  margin-top: 5rem;
  color: white;
  font-size: 2rem;
  font-weight: 300;
}

.description {
  color: #dab5f3c1;
  font-weight: 100;
  font-size: 1rem;
  margin: .6rem 0 1rem 0;
  text-align: center;
  width: 90%;
}

.controls {
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
}

.header {
  width: calc(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
