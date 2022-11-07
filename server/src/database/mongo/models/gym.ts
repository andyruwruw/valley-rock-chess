// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  displayName: {
    type: String,
    default: 'volume-day',
  },
  vSystem: {
    type: Array,
    of: {
      type: String,
    },
    default: [],
  },
  climbs: {
    type: Array,
    of: {
      type: Number,
    },
    default: [],
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
});

export const GymModel = model('Gym', schema);
