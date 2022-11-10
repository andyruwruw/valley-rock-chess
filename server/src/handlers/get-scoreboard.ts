// Local Imports
import { MESSAGE_INTERNAL_SERVER_ERROR } from '../config/messages';
import { Handler as AbstractHandler } from './handler';
import { Monitor } from '../helpers/monitor';

// Types
import {
  User,
  ValleyRequest,
  ValleyResponse,
} from '../types';
import { UserDataAccessObject } from '../database/cache/daos';
import { validate } from '../helpers/authentication';

/**
 * Creates a new gym.
 */
export class GetScoreboardHandler extends AbstractHandler {
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
    try {
      const user = await validate(req, AbstractHandler.database);

      const users = await AbstractHandler.database.user.find();

      users.sort((a: User, b: User) => (a.elo - b.elo));

      const ordered = {};

      for (let i = 0; i < users.length; i += 1) {
        if (i < 5 || users[i]._id == user._id) {
          ordered[i] = users[i];
        }
      }

      return res.send({
        scoreboard: ordered,
      });
    } catch (error) {
      Monitor.trace(
        GetScoreboardHandler,
        error,
        Monitor.Layer.WARNING,
      );

      return res.status(500).send({
        error: MESSAGE_INTERNAL_SERVER_ERROR,
      });
    }
  }
}

export default new GetScoreboardHandler();
