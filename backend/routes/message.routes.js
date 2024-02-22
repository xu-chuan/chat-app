import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getMessages, sendMessage } from '../controllers/message.controller.js';

const messageRoutes = express.Router();

messageRoutes.get('/:id', protectRoute, getMessages);
messageRoutes.post('/send/:id', protectRoute, sendMessage);

export default messageRoutes;
