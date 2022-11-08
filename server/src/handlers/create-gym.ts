// Local Imports
import {
  MESSAGE_CREATE_HANDLER_DUPLICATE_ENTRY_ERROR,
  MESSAGE_HANDLER_PARAMETER_MISSING,
  MESSAGE_INTERNAL_SERVER_ERROR,
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
export class CreateGymHandler extends AbstractHandler {
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
        displayName,
        vSystem,
        climb,
      } = req.query;

      // Are the required fields provided?
      if (!displayName) {
        return res.status(400).send({
          error: MESSAGE_HANDLER_PARAMETER_MISSING(
            'gym',
            'display name',
          ),
        });
      }

      // Does the gym exist?
      if (await checkExists(AbstractHandler.database.gym, {
        displayName,
      })) {
        return res.status(400).send({
          error: MESSAGE_CREATE_HANDLER_DUPLICATE_ENTRY_ERROR(
            'gym',
            'display name',
            displayName,
          ),
        });
      }

      await AbstractHandler.database.gym.create(
        displayName,
        vSystem || [],
        climb || [],
      );

      return res.status(200).send();
    } catch (error) {
      Monitor.trace(
        CreateGymHandler,
        error,
        Monitor.Layer.WARNING,
      );

      return res.status(500).send({
        error: MESSAGE_INTERNAL_SERVER_ERROR,
      });
    }
  }
}

export default new CreateGymHandler();
