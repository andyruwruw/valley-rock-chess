// Packages
import {
  Request,
  Response,
} from 'express';
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

export type ValleyRequest = VercelRequest | Request | MockedRequest;

export type ValleyResponse = VercelResponse | Response | MockedResponse;