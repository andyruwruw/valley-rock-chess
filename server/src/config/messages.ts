/**
 * Response to database connection.
 */
export const MESSAGE_DATABASE_CONNECTION_SUCCESS = 'Database connection successful.';

/**
 * Response to database connection.
 */
export const MESSAGE_DATABASE_CACHE_CONNECTION_SUCCESS = 'Connected to cache database for testing purposes, change to MongoDB for production.';

/**
 * Error message thrown when abstract database is used.
 */
export const MESSAGE_USED_ABSTRACT_DATABASE_ERROR = 'Attempted to use Abstract Database, use a concrete implementation instead.';

/**
 * Error message thrown when abstract data access object is used.
 */
export const MESSAGE_USED_ABSTRACT_DAO_ERROR = 'Attempted to use Abstract Data Access Object, use a concrete implementation instead.';

/**
 * Error message thrown when database URL is missing.
 */
export const MESSAGE_DATABASE_URL_MISSING_ERROR = 'Database URL not set in .env!';

/**
 * Error message thrown when a parameter is missing in create request.
 *
 * @param {string} item Item attempted to be created.
 * @param {string} parameter Name of parameter missing.
 * @returns {string} Error message.
 */
export const MESSAGE_CREATE_HANDLER_PARAMETER_MISSING = (
  item: string,
  parameter: string,
) => `${parameter} for new ${item} not provided`;

/**
 * Internal server error message.
 */
export const MESSAGE_INTERNAL_SERVER_ERROR = 'Internal Server Error';

/**
 * Error message thrown when a duplicate entry is attempted to be created.
 *
 * @param {string} item Item attempted to be created.
 * @param {string} parameter Conflicting parameter name.
 * @param {any} value Value of the parameter.
 * @returns {string} Error Message
 */
export const MESSAGE_CREATE_HANDLER_DUPLICATE_ENTRY_ERROR = (
  item: string,
  parameter: string,
  value: any,
) => `${item} with the ${parameter} "${value}" already exists'`;

/**
 * Error message thrown when a dependency of a created item is missing.
 *
 * @param {string} item Type of dependency.
 * @param {string} parameter Parameter name used to find.
 * @param {any} value Value of the parameter.
 * @returns {string} Errror message.
 */
export const MESSAGE_ITEM_MISSING = (
  item: string,
  parameter: string,
  value: any,
) => `No ${item} by the ${parameter} "${value}" exists'`;

/**
 * Error message thrown when a dependency of a created item is missing.
 *
 * @param {string} item Type of dependency.
 * @param {string} parameterPlural Parameter name used to find.
 * @param {any[]} values Value of the parameters.
 * @returns {string} Errror message.
 */
export const MESSAGE_CREATE_HANDLER_DEPENDENCIES_MISSING = (
  item: string,
  parameterPlural: string,
  values: any[],
) => `The following ${item} ${parameterPlural} were not found: ${values.map((value) => `"${value}"`).join(', ')}'`;

/**
 * Error message thrown when an item isn't created.
 *
 * @param {string} item Item attempted to be created.
 * @returns {string} Error message.
 */
export const MESSAGE_CREATE_HANDLER_FAIL = (item: string) => `Failed to create a new  ${item}`;

/**
 * Generic error message thrown when a parameter is of an invalid type.
 *
 * @param {string} parameter Parameter name.
 * @param {string} type Type of parameter.
 * @returns {string} Error message.
 */
export const MESSAGE_HANDLER_INVALID_PARAMETER_TYPE = (
  parameter: string,
  type: string,
) => `Parameter ${parameter} should be a ${type}`;

/**
 * Error message thrown when a parameter is missing in a general request.
 *
 * @param {string} item Item attempted to be found or updated.
 * @param {string} parameter Name of parameter missing.
 * @returns {string} Error message.
 */
export const MESSAGE_HANDLER_PARAMETER_MISSING = (
  item: string,
  parameter: string,
) => `${parameter} for ${item} not provided`;
