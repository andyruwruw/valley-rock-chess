// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  gym: {
    type: Schema.Types.ObjectId,
    ref: 'Gym',
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  opponent: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  type: {
    type: String,
    default: 'volume-day',
  },
  settings: {
    type: Object,
    required: true,
  },
  rated: {
    type: Boolean,
    default: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

export const GameModel = model('Game', schema);
