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
        :loading="loggingIn"
        :disabled="!username.length"
        style="margin-top: 1rem;"
        color="#9843FF"
        dark
        block
        rounded
        @click="handleLogin()">
        Enter
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

// Local Imports
import Graphic from './components/graphic.vue';
import { LOGIN_MESSAGES } from '../../config';

export default Vue.extend({
  name: 'login-view',

  components: {
    Graphic,
  },

  data: () => ({
    /**
     * Displayed messages.
     */
    messages: LOGIN_MESSAGES,

    /**
     * Input username.
     */
    username: '',

    /**
     * Whether we're logging in.
     */
    loggingIn: false,
  }),

  computed: {
    /**
     * Chosen message to be displayed.
     */
    message() {
      return this.messages[Math.floor(Math.random() * this.messages.length)];
    },
  },

  created() {
    this.handlePageLoad({ name: this.$route.name });
  },

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
    ]),

    ...mapActions('user', [
      'login',
    ]),

    async handleLogin() {
      this.loggingIn = true;
      await this.login({ username: this.username });
      this.loggingIn = false;
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
  height: calc(100% - 6rem);
}

.title {
  margin-top: 4rem;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  animation: slide-up 1s ease 0s;
}

.description {
  color: #dab5f3c1;
  font-weight: 100;
  font-size: 1rem;
  margin: .6rem 0 1rem 0;
  text-align: center;
  width: 90%;
  animation: hide .3s linear, slide-up 1s ease .3s;
}

.controls {
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  animation: hide .3s linear, slide-up 1s ease .3s;
}

.header {
  width: calc(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes slide-up {
  0% {
    opacity: 0%;
    transform: translateY(3rem);
  }

  100% {
    opacity: 100%;
  }
}

@keyframes hide {
  0% {
    opacity: 0%;
  }

  99% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}
</style>
