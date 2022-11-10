// Packages
import {
  connect,
  connection,
} from 'mongoose';

// Local Imports
import {
  ChallengeDataAccessObject,
  GameDataAccessObject,
  GymDataAccessObject,
  UpdateDataAccessObject,
  UserDataAccessObject,
  TokenDataAccessObject,
} from './daos';
import { Database } from '../database';
import { DatabaseUrlMissingError } from '../../errors/database-url-missing';
import { MESSAGE_DATABASE_CONNECTION_SUCCESS } from '../../config/messages';
import { Monitor } from '../../helpers/monitor';

/**
 * Database connection to MongoDB.
 */
export class MongoDatabase extends Database {
  /**
   * Instantiates MongoDatabase with correct queries.
   */
  constructor() {
    super();

    this.challenge = new ChallengeDataAccessObject();
    this.game = new GameDataAccessObject();
    this.gym = new GymDataAccessObject();
    this.token = new TokenDataAccessObject();
    this.update = new UpdateDataAccessObject();
    this.user = new UserDataAccessObject();
  }

  /**
   * Connects to database.
   */
  async connect(
    databaseUrl = '',
    databaseUser = '',
    databasePassword = '',
  ): Promise<void> {
    if (!databaseUrl) {
      throw new DatabaseUrlMissingError();
    }

    const authorizedUrl = databaseUrl
      .replace(
        '<user>',
        databaseUser,
      )
      .replace(
        '<password>',
        databasePassword,
      );
    await connect(authorizedUrl);

    Monitor.log(
      MongoDatabase,
      MESSAGE_DATABASE_CONNECTION_SUCCESS,
      Monitor.Layer.UPDATE,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return connection.readyState === 1;
  }
}
