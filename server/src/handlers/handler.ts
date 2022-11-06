/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import { Database } from '../database/database';
import { Environment } from '../helpers/environment';
import { getDatabase } from '../database';

// Types
import {
  ValleyRequest,
  ValleyResponse,
} from '../types';
import { Monitor } from '../helpers/monitor';

/**
 * Abstract handler class.
 */
export class Handler {
  /**
   * Database instance.
   */
  static database: Database;

  /**
   * Whether the handler is ready to execute.
   */
  _ready: boolean;

  /**
   * Instantiates a new handler.
   */
  constructor() {
    if (!Handler.database) {
      Handler.database = getDatabase(Environment.getDatabaseType());
    }

    this._connectDatabase();
  }

  /**
   * Handles the request.
   *
   * @param {ValleyRequest} req Incoming request.
   * @param {ValleyResponse} res Outgoing response.
   */
  async execute(
    req: ValleyRequest,
    res: ValleyResponse,
  ): Promise<void> {
  }

  /**
   * Connects to the database.
   */
  async _connectDatabase(): Promise<void> {
    try {
      if (!Handler.database.isConnected()) {
        await Handler.database.connect(
          Environment.getDatabaseUrl(),
          Environment.getDatabaseUser(),
          Environment.getDatabasePassword(),
        );
      }

      this._ready = true;
    } catch (error) {
      Monitor.trace(
        Handler,
        `Failed to connect to database: ${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}
