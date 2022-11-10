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
    default: '',
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
