// Packages
import axios from 'axios';

const ApiBaseUrl = (): string => {
  if (process.env.VUE_APP_ENVIRONMENT === 'development') {
    return 'https://valley-rock-chess-server.vercel.app/api';
  }
  return 'http://localhost:3000/api';
}

/**
 * Axios instance set up for the API.
 */
const request = axios.create({
  baseURL: ApiBaseUrl(),
});

export default request;
