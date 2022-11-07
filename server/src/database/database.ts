/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import { UsedAbstractDatabaseError } from '../errors/used-abstract-database-error';

// Types
import {
  Challenge,
  DataAccessObjectInterface,
  Game,
  Gym,
  Update,
  User,
} from '../types';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for Challenges.
   */
  challenge: DataAccessObjectInterface<Challenge>;

  /**
   * Data access object for Challenges.
   */
  game: DataAccessObjectInterface<Game>;

  /**
   * Data access object for Challenges.
   */
  gym: DataAccessObjectInterface<Gym>;

  /**
   * Data access object for Challenges.
   */
  update: DataAccessObjectInterface<Update>;

  /**
   * Data access object for Challenges.
   */
  user: DataAccessObjectInterface<User>;

  /**
   * Connects to database.
   *
   * @param {string | undefined} [databaseUrl=''] Database URL.
   * @param {string | undefined} [databaseUser=''] Database username.
   * @param {string | undefined} [databasePassword=''] Database password.
   */
  async connect(
    databaseUrl = '',
    databaseUser = '',
    databasePassword = '',
  ): Promise<void> {
    throw new UsedAbstractDatabaseError();
  }

  /**
   * Whether or not the database is connected.
   *
   * @returns {boolean} Whether or not the database is connected.
   */
  isConnected(): boolean {
    return false;
  }
}