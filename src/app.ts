import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Express API!');
});

export default app;