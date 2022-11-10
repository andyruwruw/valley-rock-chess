<template>
  <div
    :class="$style.component"
    class="elevation-2">
    <span :class="$style.title">
      Leaderboard
    </span>

    <div
      v-if="scoreboard.length"
      :class="$style.content">
      <scoreboard-item
        v-for="(user, i) in scoreboard"
        :key="user._id"
        :username="user.username"
        :image="user.image"
        :color="user.color"
        :index="i"
        :gamesPlayed="computedGamesPlayed(user)"
        :elo="user.elo" />

      <scoreboard-item
        v-if="userIndex != -1"
        :key="getUser._id"
        :username="getUser.username"
        :image="getUser.image"
        :color="user.color"
        :index="userIndex"
        :gamesPlayed="computedGamesPlayed(getUser)"
        :elo="user.elo" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

// Local Imports
import api from '../../../api';
import ScoreboardItem from './scoreboard-item.vue';

// Types
import { User } from '../../../types';

export default Vue.extend({
  name: 'home-scoreboard',

  components: {
    ScoreboardItem,
  },

  data: () => ({
    scoreboard: [] as User[],

    userIndex: -1,
  }),

  async created() {
    const users = await api.getScoreboard(this.getUser._id);

    const placements = Object.keys(users);

    for (let i = 0; i < placements.length; i += 1) {
      if (i < 5) {
        this.scoreboard.push(users[placements[i]]);
      } else {
        this.userIndex = i;
      }
    }
  },

  computed: {
    ...mapGetters('user', [
      'getUser',
    ]),
  },

  methods: {
    computedGamesPlayed(user: User): number {
      let number = 0;

      number += user.volumeDay && user.volumeDay.length > 1 ? user.volumeDay[0] : 0;
      number += user.volumeDay && user.volumeDay.length > 1 ? user.volumeDay[1] : 0;
      number += user.horse && user.horse.length > 1 ? user.horse[0] : 0;
      number += user.horse && user.horse.length > 1 ? user.horse[1] : 0;
      number += user.timeControl && user.timeControl.length > 1 ? user.timeControl[0] : 0;
      number += user.timeControl && user.timeControl.length > 1 ? user.timeControl[1] : 0;
      number += user.boulderBattle && user.boulderBattle.length > 1 ? user.boulderBattle[0] : 0;
      number += user.boulderBattle && user.boulderBattle.length > 1 ? user.boulderBattle[1] : 0;

      return number;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #22252E;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
}

.title {
  color: #e1c746;
  font-weight: 300;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
