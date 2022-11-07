// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  challenger: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  victim: {
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
  set: {
    type: Date,
    required: true,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

export const ChallengeModel = model('Challenge', schema);
