// Packages
import { Model } from 'mongoose';

// Local Imports
import { TokenModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Token,
  DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Tokens.
 */
export class TokenDataAccessObject
  extends DataAccessObject<Token>
  implements DataAccessObjectInterface<Token> {
  /**
   * Creates a Token in the Database.
   *
   * @param {string} user Id of user.
   * @param {string} token Token string.
   * @returns {Token} The token created.
   */
  async create(
    user: string,
    token: string,
  ): Promise<Token> {
    return this._create({
      user,
      token,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return TokenModel;
  }
}
