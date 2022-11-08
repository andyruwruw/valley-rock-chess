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
export type GameSettings = VolumeDaySettings | HorseSettings | TimeControlSettings | BoulderBattleSettings;

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