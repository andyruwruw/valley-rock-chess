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
import { Game } from '../../types';

/**
 * Game Module
 *
 * Keeps track of current ongoing game.
 */

// State interface
export interface GameModuleState extends Record<string, any> {
  /**
   * Current game.
   */
  game: Game | null;
}

// Default state
const defaultState = (): GameModuleState => ({
  game: null,
});

// Module state
const moduleState: GameModuleState = defaultState();

// Module getters
const getters: GetterTree<GameModuleState, any> = {
  /**
   * Retrieves the current logged in game.
   *
   * @param {GameModuleState} state Module state.
   * @returns {Game | null} Current logged in game.
   */
  getGame(state: GameModuleState): Game | null {
    return state.game;
  },

  /**
   * Whether a game is currently logged in.
   *
   * @param {GameModuleState} state Module state.
   * @returns {boolean} Whether a game is logged in.
   */
  isInGame(state: GameModuleState): boolean {
    return state.game !== null;
  },
};

// Module mutations
const mutations: MutationTree<GameModuleState> = {
  /**
   * Sets current game.
   *
   * @param {NavigationState} state Module state.
   * @param {Game | null} game Game to set.
   */
  setGame(
    state: GameModuleState,
    game: Game | null,
  ): void {
    state.game = game;
  },

  /**
   * Resets the state to default.
   *
   * @param {NavigationState} state Module state.
   */
  reset(state: GameModuleState): void {
    const nextState = defaultState();
    const fields = Object.keys(nextState);

    for (let i = 0; i < fields.length; i += 1) {
      state[fields[i]] = nextState[fields[i]];
    }
  },
};

// Module actions
const actions: ActionTree<GameModuleState, any> = {
};

// Module
const game: Module<GameModuleState, Record<string, any>> = {
  namespaced: true,
  state: moduleState,
  getters,
  mutations,
  actions,
};

export default game;
