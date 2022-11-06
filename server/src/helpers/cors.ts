// Local Imports
import { Environment } from './environment';

// Packages
import {
  ValleyRequest,
  ValleyResponse,
} from '../types';

/**
 * Does cors stuff.
 * @param {ValleyRequest} req Incoming request.
 * @param {ValleyResponse} res Outgoing response.
 */
export const handleCors = (
  req: ValleyRequest,
  res: ValleyResponse,
): void => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    Environment.getOrigin(),
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
};
