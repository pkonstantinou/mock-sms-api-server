/* eslint-disable import/extensions */
import express from 'express';
import { helloFromSMSServer } from '../controllers/messages.js';

const router = express.Router();

router.route('/').get(helloFromSMSServer);

export default router;
