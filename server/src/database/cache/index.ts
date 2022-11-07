// Local Imports
import {
  ChallengeDataAccessObject,
  GameDataAccessObject,
  GymDataAccessObject,
  UpdateDataAccessObject,
  UserDataAccessObject,
} from './daos';
import { Monitor } from '../../helpers/monitor';
import { Database } from '../database';
import { MESSAGE_DATABASE_CACHE_CONNECTION_SUCCESS } from '../../config/messages';

/**
 * Non-persistant cache database for testing.
 */
export class CacheDatabase extends Database {
  /**
   * Data access object for Challenges.
   */
  challenge: ChallengeDataAccessObject;

  /**
   * Data access object for Games.
   */
  game: GameDataAccessObject;

  /**
   * Data access object for Gyms.
   */
  gym: GymDataAccessObject;

  /**
   * Data access object for Updates.
   */
  update: UpdateDataAccessObject;

  /**
   * Data access object for Users.
   */
  user: UserDataAccessObject;

  /**
    * Instantiates CacheDatabase with correct queries.
    */
  constructor() {
    super();

    this.challenge = new ChallengeDataAccessObject();
    this.game = new GameDataAccessObject();
    this.gym = new GymDataAccessObject();
    this.update = new UpdateDataAccessObject();
    this.user = new UserDataAccessObject();
  }

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    Monitor.log(
      CacheDatabase,
      MESSAGE_DATABASE_CACHE_CONNECTION_SUCCESS,
      Monitor.Layer.WARNING,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */

  isConnected(): boolean {
    return true;
  }
}
