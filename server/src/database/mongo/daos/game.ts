// Packages
import { Model } from 'mongoose';

// Local Imports
import { GameModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Game,
  DataAccessObjectInterface,
  GameSettings,
  GameType,
} from '../../../types';

/**
 * Data access object for Games.
 */
export class GameDataAccessObject
  extends DataAccessObject<Game>
  implements DataAccessObjectInterface<Game> {
  /**
   * Creates a Game in the Database.
   *
   * @param {string} gym Id of Gym.
   * @param {string} owner Id of user who opened game.
   * @param {GameType} type Game type.
   * @param {GameSettings} settings Additional game settings.
   * @param {boolean} rated Whether the game is rated.
   * @returns {Game} The game created.
   */
  async create(
    gym: string,
    owner: string,
    type: GameType,
    settings: GameSettings,
    rated: boolean,
  ): Promise<Game> {
    return this._create({
      gym,
      owner,
      type,
      settings,
      rated,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return GameModel;
  }
}
