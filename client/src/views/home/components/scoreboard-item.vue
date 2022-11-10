<template>
  <div :class="$style.component">
    <div :class="$style.main">
      <span :class="$style.index">
        {{ index + 1 }}.
      </span>

      <profile-photo
        :image="image"
        :color="color"
        size="28" />

      <span :class="$style.username">
        {{ username }}
      </span>
    </div>

    <div :class="$style.main">
      <span :class="$style.games">
        {{ gamesPlayed }} Games
      </span>

      <span :class="$style.games">
        {{ elo }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import ProfilePhoto from '../../../components/ui/image/profile-photo.vue';

export default Vue.extend({
  name: 'home-scoreboard-item',

  components: {
    ProfilePhoto,
  },

  props: {
    username: {
      type: String,
    },

    color: {
      type: String,
      default: undefined,
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
  margin: .5rem 0;
}

.main {
  display: flex;
}

.index {
  color: rgba(255, 255, 255, 0.495);
  font-weight: 100;
  font-size: 1rem;
  padding-right: .5rem;
  line-height: 28px;
}

.username {
  color: white;
  font-weight: 100;
  font-size: 1rem;
  padding-left: .5rem;
  line-height: 24px;
}

.games {
  color: rgba(255, 255, 255, 0.224);
  font-weight: 100;
  font-size: 1rem;
  margin-right: .5rem;
  line-height: 24px;
}
</style>
