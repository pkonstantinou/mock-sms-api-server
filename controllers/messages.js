import asyncHandler from 'express-async-handler';
import Message from '../models/Message.js';

// @desc     Get all messages
// @route    GET /api/v1/messages
// @access   Public
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find();

  res.status(200).json({ success: true, data: messages });
});

// @desc     Get single message
// @route    GET /api/v1/messages/:id
// @access   Public
const getMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    return res.status(404).json({
      success: false,
      error: `No resource found with id ${req.params.id}`,
    });
  }

  res.status(200).json({ success: true, data: message });
});

// @desc     Create/Send message
// @route    POST /api/v1/messages
// @access   Public
const createMessage = asyncHandler(async (req, res) => {
  const message = await Message.create(req.body);

  res.status(201).json({ success: true, data: message });
});

export { getMessages, getMessage, createMessage };
