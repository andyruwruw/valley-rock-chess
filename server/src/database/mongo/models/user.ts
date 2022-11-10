// Packages
import {
  model,
  Schema,
} from 'mongoose';

// Local Imports
import { PROFILE_COLORS } from '../../../config';

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  elo: {
    type: Number,
    default: 1500,
  },
  volumeDay: {
    type: Array,
    of: {
      type: Number,
    },
    default: [ 0, 0 ],
  },
  horse: {
    type: Array,
    of: {
      type: Number,
    },
    default: [ 0, 0 ],
  },
  timeControl: {
    type: Array,
    of: {
      type: Number,
    },
    default: [ 0, 0 ],
  },
  boulderBattle: {
    type: Array,
    of: {
      type: Number,
    },
    default: [ 0, 0 ],
  },
  image: {
    type: String,
    default: `${Math.ceil(Math.random() * 82)}`,
  },
  color: {
    type: String,
    default: PROFILE_COLORS[Math.floor(Math.random() * PROFILE_COLORS.length)],
  },
  maxV: {
    type: Number,
    default: -1,
  },
  chessElo: {
    type: Number,
    default: -1,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

export const UserModel = model('User', schema);
