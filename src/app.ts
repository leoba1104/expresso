import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes';
import heroesRouter from './routes/heroesRoutes';
import villainsRouter from './routes/villainsRoutes';

import logger from './config/logger';
import morganMiddleware from './middleware/morganMiddleware';

import { swaggerUi, swaggerSpec } from './config/swagger';
import authenticateToken from './middleware/authMiddleware';

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

// Public Routes
app.use('/auth', authRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/heroes', authenticateToken, heroesRouter);
app.use('/villains', authenticateToken, villainsRouter);

export default app;
