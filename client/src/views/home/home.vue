<template>
  <div :class="$style.component">
    <toolbar />

    <div :class="$style.options">
      <card-button
        text="Create Game"
        color="#EB1E4B"
        image="66" />

        <card-button
        text="Join Game"
        color="#2D969B"
        image="62" />

        <card-button
        text="Scoreboard"
        color="#F06937"
        image="41" />

        <card-button
        text="Profile"
        color="#1E64AF"
        image="35" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

// Local Imports
import Toolbar from './components/toolbar.vue';
import CardButton from '../../components/ui/buttons/card-button.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    Toolbar,
    CardButton,
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

.options {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
