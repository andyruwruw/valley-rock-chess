import Vue from 'vue';
import Vuex from 'vuex';

import game from './modules/game';
import navigation from './modules/navigation';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    navigation,
    user,
  },
});
