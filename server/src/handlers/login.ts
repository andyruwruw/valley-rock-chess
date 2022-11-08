// Local Imports
import {
  attatchCookie,
  generateToken,
} from '../helpers/cookies';
import {
  MESSAGE_HANDLER_PARAMETER_MISSING,
  MESSAGE_INTERNAL_SERVER_ERROR,
} from '../config/messages';
import { Handler as AbstractHandler } from './handler';
import { Monitor } from '../helpers/monitor';

// Types
import {
  ValleyRequest,
  ValleyResponse,
} from '../types';

/**
 * Logs a user in or creates a new user.
 */
export class LoginHandler extends AbstractHandler {
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
      const { username } = req.query;

      // Are the required fields provided?
      if (!username) {
        return res.status(400).send({
          error: MESSAGE_HANDLER_PARAMETER_MISSING(
            'user',
            'username',
          ),
        });
      }

      let user = await AbstractHandler.database.user.findOne({
        username,
      });

      // Does the user exist?
      if (!user) {
        user = await AbstractHandler.database.user.create(username);
      }

      // Add authentication cookie.
      const token = generateToken({
        id: user._id,
      });
      attatchCookie(
        res,
        token,
      );
      
      // Register token.
      await AbstractHandler.database.token.create(
        user._id,
        token,
      );

      return res.status(200).send({
        user,
      });
    } catch (error) {
      Monitor.trace(
        LoginHandler,
        error,
        Monitor.Layer.WARNING,
      );

      return res.status(500).send({
        error: MESSAGE_INTERNAL_SERVER_ERROR,
      });
    }
  }
}

export default new LoginHandler();
