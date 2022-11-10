<template>
  <div :class="$style.component">
    <div :class="$style.main">
      <span :class="$style.index">
        {{ index + 1 }}.
      </span>

      <img
        :class="$style.image"
        :src="image"
        class="elevation-1"
        alt="#" />

      <span :class="$style.username">
        {{ username }}
      </span>
    </div>

    <span :class="$style.games">
      {{ gamesPlayed }} Games
    </span>

    <span :class="$style.games">
      {{ elo }}
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'home-scoreboard-item',

  props: {
    username: {
      type: String,
    },

    index: {
      type: Number,
    },

    image: {
      type: String,
    },

    gamesPlayed: {
      type: Number,
    },

    elo: {
      type: Number,
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: space-between;
}

.main {
  display: flex;
}

.index {
  color: rgba(255, 255, 255, 0.495);
  font-weight: 100;
  font-size: 1rem;
  margin-right: .5rem;
  line-height: 28px;
}

.username {
  color: white;
  font-weight: 100;
  font-size: 1rem;
  margin-right: .5rem;
  line-height: 24px;
}

.image {
  display: block;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.317);
  border-radius: 100%;
  margin-right: .5rem;
}

.games {
  color: rgba(255, 255, 255, 0.224);
  font-weight: 100;
  font-size: 1rem;
  margin-right: .5rem;
  line-height: 24px;
}
</style>
