import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import errorHandler from './middleware/error.js';
import connectDB from './config/db.js';
import messagesRoute from './routes/messages.js';

// Load env vars
dotenv.config({ path: './config/.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable console colors
colors.enable();

// Mount routers
app.use('/api/v1/messages', messagesRoute);

// Mount custom error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(
    `Mock SMS server is listening at port ${process.env.PORT}`.cyan.italic
  );
});
