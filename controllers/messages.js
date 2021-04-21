import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';
import Message from '../models/Message.js';

// @desc     Get all messages
// @route    GET /api/v1/messages
// @access   Public
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find();

  res
    .status(200)
    .json({ success: true, count: messages.length, data: messages });
});

// @desc     Get single message
// @route    GET /api/v1/messages/:id
// @access   Public
const getMessage = asyncHandler(async (req, res, next) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    return next(
      new ErrorResponse(`No resource found with id ${req.params.id}`, 404)
    );
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
