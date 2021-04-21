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
    match: [
      /^\+\d{12}$/,
      "Mobile number for sender should start with '+' followed by 12 digits",
    ],
  },
  to: {
    type: String,
    required: [true, 'Please provide receiver for your message'],
    match: [
      /^\+\d{12}$/,
      "Mobile number for receiver should start with '+' followed by 12 digits",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Message', MessageSchema);
