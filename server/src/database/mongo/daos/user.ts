// Packages
import { Model } from 'mongoose';

// Local Imports
import { UserModel } from '../models';
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
    image: string = `${Math.ceil(Math.random() * 82)}`,
  ): Promise<User> {
    return this._create({
      username,
      image,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return UserModel;
  }
}
