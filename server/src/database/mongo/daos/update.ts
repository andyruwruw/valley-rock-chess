// Packages
import { Model } from 'mongoose';

// Local Imports
import { UpdateModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Update,
  DataAccessObjectInterface,
  GameSettings,
} from '../../../types';

/**
 * Data access object for Updates.
 */
export class UpdateDataAccessObject
  extends DataAccessObject<Update>
  implements DataAccessObjectInterface<Update> {
  /**
   * Creates a Update in the Database.
   *
   * @param {string} game Id of the game.
   * @param {string} user Id of the user.
   * @param {string} type Game type.
   * @param {GameSettings} settings Game type settings.
   * @param {string} action What the user did.
   * @returns {Update} The update created.
   */
  async create(
    game: string,
    user: string,
    type: string,
    settings: GameSettings,
    action: string,
  ): Promise<Update> {
    return this._create({
      game,
      user,
      type,
      settings,
      action,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return UpdateModel;
  }
}
