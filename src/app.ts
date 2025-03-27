import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import heroesRouter from './routes/heroesRoutes';
import villainsRouter from './routes/villainsRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => {
        console.log('✅ Connected to MongoDB');
    })
    .catch((error) => {
        console.error('❌ Error connecting to MongoDB:', error);
        process.exit(1);
    });

// Middleware to parse JSON requests
app.use(express.json());

// Use heroesRouter for /api route
app.use('/api', heroesRouter);

app.use('/api', villainsRouter);

export default app;
