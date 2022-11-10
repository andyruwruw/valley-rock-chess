// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import ROUTES from '../src/handlers';
import { handleCors } from '../src/helpers/cors';

/**
 * Routes all incoming Vercel Serverless Function requests to the appropriate endpoint.
 *
 * @param {VercelRequest} req Incoming request.
 * @param {VercelResponse} res Outgoing response.
 */
export default async function (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  /**
   * ID of endpoint.
   */
  const { action } = req.query;

  /**
   * Deal with pesky cors.
   */
  handleCors(
    req,
    res,
  );

  const handler = new ROUTES[action as string]();

  await handler.connectDatabase();

  /**
   * 
   * 
   * Execute function.
   */
  await handler.execute(
    req,
    res,
  );
}
