import mongoose, { Schema } from 'mongoose';

const LocationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  coordinates: {
    type: {
      latitude: Number,
      longitude: Number,
    },
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.Location || mongoose.model('Location', LocationSchema);