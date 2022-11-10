// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  Gym,
  DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Gyms.
 */
export class GymDataAccessObject
  extends DataAccessObject<Gym>
  implements DataAccessObjectInterface<Gym> {
  /**
   * Creates a Gym in the Database.
   *
   * @param {string} displayName Name of the gym.
   * @param {string[]} vSystem Name of each V-Grade.
   * @param {number[]} climbs How many of each V-Grade the gym has.
   * @returns {Gym} The gym created.
   */
  async create(
    displayName: string,
    vSystem = [] as string[],
    climbs = [] as number[],
  ): Promise<Gym> {
    return this._create({
      displayName,
      vSystem,
      climbs,
    });
  }
}
