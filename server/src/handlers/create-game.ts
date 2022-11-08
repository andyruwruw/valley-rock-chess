// Local Imports
import {
  MESSAGE_CREATE_HANDLER_DUPLICATE_ENTRY_ERROR,
  MESSAGE_HANDLER_PARAMETER_MISSING,
  MESSAGE_INTERNAL_SERVER_ERROR,
  MESSAGE_ITEM_MISSING,
} from '../config/messages';
import { checkExists } from '../helpers/parameters';
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
export class CreateGameHandler extends AbstractHandler {
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
      const {
        gym,
        owner,
        type,
        settings,
        rated
      } = req.query;

      // Are the required fields provided?
      if (!gym) {
        return res.status(400).send({
          error: MESSAGE_HANDLER_PARAMETER_MISSING(
            'game',
            'gym',
          ),
        });
      }
      if (!owner) {
        return res.status(400).send({
          error: MESSAGE_HANDLER_PARAMETER_MISSING(
            'game',
            'owner',
          ),
        });
      }
      if (!type) {
        return res.status(400).send({
          error: MESSAGE_HANDLER_PARAMETER_MISSING(
            'game',
            'type',
          ),
        });
      }
      if (!settings) {
        return res.status(400).send({
          error: MESSAGE_HANDLER_PARAMETER_MISSING(
            'game',
            'settings',
          ),
        });
      }
      if (!rated) {
        return res.status(400).send({
          error: MESSAGE_HANDLER_PARAMETER_MISSING(
            'game',
            'rated',
          ),
        });
      }

      // Does the gym exist?
      if (await checkExists(AbstractHandler.database.gym, {
        _id: gym,
      })) {
        return res.status(400).send({
          error: MESSAGE_ITEM_MISSING(
            'gym',
            'id',
            gym,
          ),
        });
      }

      let game = await AbstractHandler.database.game.create(
        gym,
        owner,
        type,
        settings,
        rated,
      );

      return res.status(200).send({
        game,
      });
    } catch (error) {
      Monitor.trace(
        CreateGameHandler,
        error,
        Monitor.Layer.WARNING,
      );

      return res.status(500).send({
        error: MESSAGE_INTERNAL_SERVER_ERROR,
      });
    }
  }
}

export default new CreateGameHandler();
