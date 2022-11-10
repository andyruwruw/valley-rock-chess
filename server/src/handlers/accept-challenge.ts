// Local Imports
import { MESSAGE_INTERNAL_SERVER_ERROR } from '../config/messages';
import { Handler as AbstractHandler } from './handler';
import { Monitor } from '../helpers/monitor';

// Types
import {
  ValleyRequest,
  ValleyResponse,
} from '../types';

/**
 * Creates a new gym.
 */
export class AcceptChallengeHandler extends AbstractHandler {
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
      return res.send(null);
    } catch (error) {
      Monitor.trace(
        AcceptChallengeHandler,
        error,
        Monitor.Layer.WARNING,
      );

      return res.status(500).send({
        error: MESSAGE_INTERNAL_SERVER_ERROR,
      });
    }
  }
}

export default new AcceptChallengeHandler();
