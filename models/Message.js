import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "Please privide a body for your message"],
    maxLength: [160, "Message body can not exceed the 160 characters"],
  },
  from: {
    type: String,
    required: [true, "Please provide sender for your message"],
    match: [/\A\+\d{12}\z/, "Please provide a valid mobile number"],
  },
  to: {
    type: String,
    required: [true, "Please provide receiver for your message"],
    match: [/\A\+\d{12}\z/, "Please provide a valid mobile number"],
  },
});

export default mongoose.model("Message", MessageSchema);
