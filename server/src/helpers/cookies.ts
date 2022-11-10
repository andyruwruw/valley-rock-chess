// Packages
import * as jsonwebtoken from 'jsonwebtoken';

// Local Imports
import { COOKIE_NAME } from '../config';
import { Environment } from './environment';

// Types
import {
  ValleyRequest,
  ValleyResponse,
} from '../types';

/**
 * Retrieves a cookie from requests.
 *
 * @param {ValleyRequest} req Incoming request.
 * @returns {string | null} Cookie value.
 */
export const getCookie = (req: ValleyRequest): string | null => {
  if (!(COOKIE_NAME in req.cookies)) {
    return null;
  }
  return req.cookies[COOKIE_NAME];
};

/**
 * Attatches a cookie to an outgoing response.
 *
 * @param {ValleyResponse} res Outgoing response.
 * @param {string} cookie Cookie to be attached.
 */
export const attatchCookie = (
  res: ValleyResponse,
  cookie: string,
): void => {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=${cookie}`);
};

/**
 * Generates a signed token.
 *
 * @param {any} data Data to sign.
 * @param {string} [expires = '24h'] When the token expires.
 * @returns {string} Signed token.
 */
export const generateToken = (
  data: any,
  expires = '24h',
): string => jsonwebtoken.sign(
  data,
  Environment.getSecret(),
  {
    expiresIn: expires,
  },
);

/**
 * Decodes a signed token.
 *
 * @param {string} token Signed token.
 * @returns {any} Data from token.
 */
export const decodeToken = (token: string): any => jsonwebtoken.verify(
  token,
  Environment.getSecret(),
);
