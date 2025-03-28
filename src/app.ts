import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import heroesRouter from './routes/heroesRoutes';
import villainsRouter from './routes/villainsRoutes';

import logger from './config/logger';
import morganMiddleware from './config/morgan';

import { swaggerUi, swaggerSpec } from './config/swagger';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => {
        logger.info('✅ Connected to MongoDB');
    })
    .catch((error) => {
        logger.error(`❌ Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    });

app.use(express.json());

// Log requests
app.use(morganMiddleware);

app.use('/heroes', heroesRouter);

app.use('/villains', villainsRouter);

// Middleware to parse JSON requests
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
