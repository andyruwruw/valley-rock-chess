// Packages
import {
  model,
  Schema,
} from 'mongoose';

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
  },
  horse: {
    type: Array,
    of: {
      type: Number,
    },
  },
  timeControl: {
    type: Array,
    of: {
      type: Number,
    },
  },
  boulderBattle: {
    type: Array,
    of: {
      type: Number,
    },
  },
  image: {
    type: String,
    required: true,
  },
  maxV: {
    type: Number,
    required: true,
  },
  chessElo: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

export const UserModel = model('User', schema);
