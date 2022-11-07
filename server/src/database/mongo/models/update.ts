// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
    required: true,
  },
  user: {
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
  action: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

export const UpdateModel = model('Update', schema);
