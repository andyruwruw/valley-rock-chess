<template>
  <div :class="$style.component">
    <toolbar />

    <v-btn
      color="#1D55DE"
      rounded
      dark>
      Play
    </v-btn>

    <scoreboard />
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

// Local Imports
import Toolbar from './components/toolbar.vue';
import Scoreboard from './components/scoreboard.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    Toolbar,
    Scoreboard,
  },

  created() {
    this.requiresLogin();
    this.handlePageLoad({ name: this.$route.name });
  },

  methods: {
    ...mapActions('navigation', [
      'requiresLogin',
      'handlePageLoad',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}
</style>
