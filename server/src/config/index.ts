/**
 * Database type enum.
 */
export const DATABASE_TYPES = {
  MONGO: 'mongodb',
  CACHE: 'cache',
};

/**
 * StOut escape code for resetting formatting.
 */
export const STD_OUT_ESCAPE_CODE_RESET = '\x1b[0m';

/**
 * Format for different monitor layers.
 */
export const STD_OUT_MONITOR_LAYER_NAME_FORMATING: Record<string, string> = {
  0: '\x1b[90m', // DEBUG
  1: '\x1b[91m', // WARNING
  2: '\x1b[33m', // UPDATE
};

/**
 * Format for different monitor layers.
 */
export const STD_OUT_MONITOR_LAYER_MESSAGE_FORMATING: Record<string, string> = {
  0: '\x1b[90m', // DEBUG
  1: '\x1b[37m', // WARNING
  2: '\x1b[37m', // UPDATE
};

/**
 * Developmental URL for cors.
 */
export const DEVELOPMENT_URL = 'http://localhost:3000';

/**
 * Production URL for cors.
 */
export const PRODUCTION_URL = '';

/**
 * Name of stored browser cookie.
 */
export const COOKIE_NAME = 'vallychess_auth';

/**
 * Authentication details.
 */
export const SALT_WORK_FACTOR = 12;

/**
 * Color of profiles.
 */
export const PROFILE_COLORS = [
  '#A5236E',
  '#F578B9',
  '#EB1E4B',
  '#F06937',
  '#FAD223',
  '#2D969B',
  '#1E64AF',
  '#69BEEB',
  '#8CB45F',
  '#232323',
  '#F5F5FF',
];
