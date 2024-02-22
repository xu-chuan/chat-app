import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import { app, server } from './socket/socket.js';
import path from 'path';

dotenv.config();
const port = process.env.PORT || 5001;
const __dirname = path.resolve();
console.log(`path`, __dirname);

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/backend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend', 'dist', 'index.html'));
});

server.listen(port, () => {
  connectToMongoDB();
  console.log('Server running on port ' + port);
});
