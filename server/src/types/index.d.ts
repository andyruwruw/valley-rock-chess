// Packages
import {
  Request,
  Response,
} from 'express';
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

/**
 * Extends requests to allow for Express, Jest testing or Vercel Requests.
 */
export type ValleyRequest = VercelRequest | Request | MockedRequest;

/**
 * Extends responses to allow for Express, Jest testing or Vercel Responses.
 */
export type ValleyResponse = VercelResponse | Response | MockedResponse;

/**
 * Gamemodes.
 */
export type GameType = 'volume-day' | 'horse' | 'time-control' | 'boulder-battle';

/**
 * Additional settings for Volume Day game type.
 */
export interface VolumeDaySettings {
  baseGrade: number[];
  timeControlBase: number[];
  timeControlAdditions: number[];
  walkPauses: boolean;
}

/**
 * Additional settings for H.O.R.S.E. game type.
 */
export interface HorseSettings {
  letterNumber: number[];
  moveLimit: number[];
}

/**
 * Additional settings for Time Control game type.
 */
export interface TimeControlSettings {
  baseGrade: number[];
  timeControlBase: number[];
  timeControlAdditions: number[];
  walkPauses: boolean;
  ditchesAllowed: boolean[];
  walkPauses: boolean;
}

/**
 * Additional settings for Boulder Battle game type.
 */
export interface BoulderBattleSettings {
  defeatKills: boolean;
  baseGrade: number[];
  moveLimit: number[];
}

/**
 * Game settings object.
 */
export type GameSettings =
  VolumeDaySettings
  | HorseSettings
  | TimeControlSettings
  | BoulderBattleSettings;

/**
 * Game database object.
 */
export interface Game {
  _id?: string;
  gym?: string;
  owner: string;
  opponent?: string | null;
  type: GameType;
  settings: GameSettings;
  rated: boolean;
  created?: Date;
}

/**
 * Gym database object.
 */
export interface Gym {
  _id?: string;
  displayName: string;
  vSystem?: string[];
  climbs?: number[];
  updated?: Date;
}

/**
 * User database object.
 */
export interface User {
  _id?: string;
  username: string;
  elo?: number;
  volumeDay?: number[];
  horse?: number[];
  timeControl?: number[];
  boulderBattle?: number[];
  image?: string;
  maxV?: number;
  color?: string;
  chessElo?: number;
  created?: Date;
}

/**
 * Challenge database object.
 */
export interface Challenge {
  _id?: string;
  challenger: string;
  victim: string;
  type: GameType;
  settings: GameSettings;
  rated: boolean;
  set: Date;
  accepted?: boolean;
  created?: Date;
}

/**
 * Update database object.
 */
export interface Update {
  _id?: string;
  game: string;
  user: string;
  type: string;
  settings: GameSettings;
  action: string;
  created?: Date;
}

/**
 * Token database object.
 */
export interface Token {
  user: string;
  token: string;
  created?: Date;
}

/**
 * Types of data in the database.
 */
export type DatabaseColumnTypes =
  string
  | number
  | boolean
  | Date
  | string[]
  | number[]
  | GameSettings;

/**
 * Filter object used to limit queries.
 */
export interface QueryFilter {
  [key: string]: DatabaseColumnTypes
  | DatabaseColumnTypes[]
  | Record<string, DatabaseColumnTypes
  | DatabaseColumnTypes[]>;
}

/**
 * Projection on queries to limit columns.
 */
export type QueryProjection = Record<string, number> | string | string[];

/**
 * Update object used to update data in the database.
 */
export interface UpdateQuery {
  [key: string]: DatabaseColumnTypes | Record<string, DatabaseColumnTypes>;
}

/**
 * Interface for all DAOs.
 */
export interface DataAccessObjectInterface<T> {
  _create: (item: T) => Promise<T>;
  create: (...args: any[]) => Promise<T>;

  findOne: (
    filter?: QueryFilter,
    projection?: QueryProjection,
  ) => Promise<T | null>;

  find: (
    filter?: QueryFilter,
    projection?: QueryProjection,
    offset?: number,
    limit?: number,
  ) => Promise<T[]>;

  findById: (id: string) => Promise<T | null>;

  delete: (filter?: QueryFilter) => Promise<number>;

  deleteById: (id: string) => Promise<boolean>;

  updateOne: (
    filter?: QueryFilter,
    update?: UpdateQuery,
    insertNew?: boolean,
  ) => Promise<boolean>;

  updateMany: (
    filter?: QueryFilter,
    update?: UpdateQuery,
    insertNew?: boolean,
  ) => Promise<number>;

  clear: () => Promise<void>;
}

export interface HandlerInterface {
  execute: (
    req: PathwayRequest,
    res: PathwayResponse,
  ) => Promise<void>;

  connectDatabase: () => Promise<void>;
}
