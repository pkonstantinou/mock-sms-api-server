/* eslint-disable import/extensions */
import express from 'express';
import {
  getMessages,
  getMessage,
  createMessage,
} from '../controllers/messages.js';

const router = express.Router();

router.route('/').get(getMessages).post(createMessage);
router.route('/:id').get(getMessage);

export default router;
