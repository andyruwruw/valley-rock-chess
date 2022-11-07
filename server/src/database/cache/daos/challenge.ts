// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  Challenge,
  DataAccessObjectInterface,
  GameSettings,
  GameType,
} from '../../../types';

/**
 * Data access object for Challenges.
 */
export class ChallengeDataAccessObject
  extends DataAccessObject<Challenge>
  implements DataAccessObjectInterface<Challenge> {
  /**
   * Creates a Challenge in the Database.
   *
   * @param {string} challenger Username of challenger.
   * @param {string} victim Username of user being challenged.
   * @param {GameType} type Gamemode type.
   * @param {GameSettings} settings Additional game settings.
   * @param {boolean} rated Whether the game will impact ratings.
   * @param {Date} set When the challenge is set to occur.
   * @returns {Challenge} The challenge created.
   */
  async create(
    challenger: string,
    victim: string,
    type: GameType,
    settings: GameSettings,
    rated: boolean,
    set: Date,
  ): Promise<Challenge> {
    return this._create({
      challenger,
      victim,
      type,
      settings,
      rated,
      set,
    });
  }
}
