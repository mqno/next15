import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  locations: [{
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }],
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);