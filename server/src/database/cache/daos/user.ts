// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  User,
  DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Users.
 */
export class UserDataAccessObject
  extends DataAccessObject<User>
  implements DataAccessObjectInterface<User> {
  /**
   * Creates a User in the Database.
   *
   * @param {string} username Chosen username.
   * @param {string} chosen Image.
   * @returns {User} The user created.
   */
  async create(
    username: string,
    image: string,
  ): Promise<User> {
    return this._create({
      username,
      image,
    });
  }
}
