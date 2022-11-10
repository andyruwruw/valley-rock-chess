// Local Imports
import { Database as DatabaseClass } from './database';
import { CacheDatabase } from './cache';
import { MongoDatabase } from './mongo';
import { DATABASE_TYPES } from '../config';

/**
 * Static instance of the database.
 */
let DatabaseInstace: DatabaseClass | null = null;

/**
 * Generates database based on environmental variables.
 *
 * @param {string} databaseType Type of database to generate.
 */
export const initializeDatabase = async (databaseType = 'cache') => {
  if (!DatabaseInstace) {
    DatabaseInstace = databaseType === DATABASE_TYPES.MONGO ?
      new MongoDatabase()
      : new CacheDatabase();
  }
};

/**
 * Retrieves database based on environmental variables.
 *
 * @param {string} databaseType Type of database to generate.
 * @returns {Database} The database.
 */
export const getDatabase = (databaseType = 'cache'): DatabaseClass => {
  initializeDatabase(databaseType);

  return DatabaseInstace;
};
