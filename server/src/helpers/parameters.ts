// Local Imports
import {
  MESSAGE_HANDLER_INVALID_PARAMETER_TYPE,
} from '../config/messages';

// Types
import {
  DataAccessObjectInterface,
  QueryFilter,
} from '../types';

/**
 * Checks whether an item already exists in the database.
 *
 * @param {DataAccessObjectInterface<any>} dao Data access object for item.
 * @param {QueryFilter} filter Query filter item should match.
 * @returns {boolean} Whether the item exists.
 */
export const checkExists = async (
  dao: DataAccessObjectInterface<any>,
  filter: QueryFilter,
): Promise<boolean> => {
  const existing = await dao.findOne(filter);

  if (existing) {
    return true;
  }
  return false;
};

/**
 * Checks whether a set of ids are in the database.
 *
 * @param {DataAccessObjectInterface<any>} dao Data access object for item.
 * @param {string[]} ids Ids to find.
 * @returns {string[]} Missing Ids.
 */
export const findMissingDependencies = async (
  dao: DataAccessObjectInterface<any>,
  ids: string[],
): Promise<string[]> => {
  if (ids && Array.isArray(ids) && ids.length) {
    const existing = await dao.find({
      _id: {
        $in: ids,
      },
    });

    if (existing.length !== ids.length) {
      const existingIds = existing.map((item) => item._id);
      const missingIds = [];

      for (let i = 0; i < ids.length; i += 1) {
        if (!existingIds.includes(ids[i])) {
          missingIds.push(ids[i]);
        }
      }

      return missingIds;
    }
  }
  return [];
};

/**
 * Validates number value.
 *
 * @param {string} name Name of the parameter.
 * @param {string | number} value Proposed value.
 * @returns {string | number} Converted number or error message.
 */
export const validateNumber = (
  name: string,
  value: string | number,
): string | number => {
  if (value) {
    if (typeof value === 'string') {
      const converted = parseInt(value, 10);

      if (Number.isNaN(converted)) {
        return MESSAGE_HANDLER_INVALID_PARAMETER_TYPE(name, 'number');
      }
      return converted;
    } if (typeof value === 'number') {
      return value;
    }
    return MESSAGE_HANDLER_INVALID_PARAMETER_TYPE(name, 'number');
  }
  return value;
};

/**
 * Validates a string or array of strings.
 *
 * @param {string} name Name of the parameter.
 * @param {any} value Proposed value.
 * @returns {string} Error message if any.
 */
export const validateStringOrStringArray = (
  name: string,
  value: any,
): string => {
  if (value) {
    if (typeof value !== 'string'
      && (!Array.isArray(value)
      || !value.every((item) => typeof item === 'string'))) {
      return MESSAGE_HANDLER_INVALID_PARAMETER_TYPE(name, 'string or array of strings');
    }
  }
  return '';
};

/**
 * Separates out comma separated strings.
 *
 * @param {string} values Comma separated values.
 * @returns {string[]} Split values.
 */
export const parseCommaSeparatedStrings = (values: string) => values.split(',');
