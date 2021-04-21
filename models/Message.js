import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, 'Please privide a body for your message'],
    maxLength: [160, 'Message body can not exceed the 160 characters'],
  },
  from: {
    type: String,
    required: [true, 'Please provide sender for your message'],
    match: [/^[a-zA-Z\d]{3,11}$/, 'Invalid alphanumeric sender ID'],
  },
  to: {
    type: String,
    required: [true, 'Please provide receiver for your message'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Message', MessageSchema);
