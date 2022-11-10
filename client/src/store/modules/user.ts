// Packages
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

// Local Imports
import api from '../../api';

// Types
import { User } from '../../types';

/**
 * User Module
 *
 * The user module will manage the current logged in user and their
 * general information.
 */

// State interface
export interface AuthModuleState extends Record<string, any> {
  /**
   * Current logged in user.
   */
  user: User | null;
}

// Default state
const defaultState = (): AuthModuleState => ({
  user: null,
});

// Module state
const moduleState: AuthModuleState = defaultState();

// Module getters
const getters: GetterTree<AuthModuleState, any> = {
  /**
   * Retrieves the current logged in user.
   *
   * @param {AuthModuleState} state Module state.
   * @returns {User | null} Current logged in user.
   */
  getUser(state: AuthModuleState): User | null {
    return state.user;
  },

  /**
   * Whether a user is currently logged in.
   *
   * @param {AuthModuleState} state Module state.
   * @returns {boolean} Whether a user is logged in.
   */
  isLoggedIn(state: AuthModuleState): boolean {
    return state.user !== null;
  },
};

// Module mutations
const mutations: MutationTree<AuthModuleState> = {
  /**
   * Sets current logged in user.
   *
   * @param {NavigationState} state Module state.
   * @param {User | null} user User to set.
   */
  setUser(
    state: AuthModuleState,
    user: User | null,
  ): void {
    state.user = user;
  },

  /**
   * Resets the state to default.
   *
   * @param {NavigationState} state Module state.
   */
  reset(state: AuthModuleState): void {
    const nextState = defaultState();
    const fields = Object.keys(nextState);

    for (let i = 0; i < fields.length; i += 1) {
      state[fields[i]] = nextState[fields[i]];
    }
  },
};

// Module actions
const actions: ActionTree<AuthModuleState, any> = {
  /**
   * Logs a user in with the website.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   * @param {Record<string, any>} payload Action payload.
   * @param {string} payload.username User's username.
   * @param {string} payload.password User's password.
   */
  async login({
    commit,
    dispatch,
  }, { username }): Promise<void> {
    try {
      const response = await api.login(username);

      if (response.user) {
        commit('setUser', response.user);
        dispatch('navigation/goToHome', undefined, { root: true });
      }
    } catch (error) {
      console.log(error);
    }
  },

  async checkUser({
    commit,
    dispatch,
  }): Promise<void> {
    try {
      const user = await api.checkUser();

      if (user) {
        commit('setUser', user);
        dispatch('navigation/goToHome', undefined, { root: true });
      }
    } catch (error) {
      console.log(error);
    }
  },

  // async updateUser({ commit }, {
  //   username,
  //   imageUrl,
  // }): Promise<void> {
  //   try {
  //     const response = await api.update(
  //       name,
  //       imageUrl,
  //       privateMode,
  //     );

  //     if (response) {
  //       commit('setUser', response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  // /**
  //  * Logs a user out and clears state.
  //  *
  //  * @param {ActionContext<NavigationState, any>} context Vuex action context.
  //  */
  // logout({
  //   commit,
  //   dispatch,
  // }): void {
  //   commit('reset');
  //   commit('shows/reset', undefined, { root: true });
  //   dispatch('navigation/goToLanding', undefined, { root: true });
  //   api.auth.logout();
  // },
};

// Module
const user: Module<AuthModuleState, Record<string, any>> = {
  namespaced: true,
  state: moduleState,
  getters,
  mutations,
  actions,
};

export default user;
