import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in environment variables');
}

// Define an extended request interface within the middleware
export interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}

// Middleware to check JWT
const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(403).json({ message: 'Access denied. No token provided.' });
        return;
    }

    try {
        // Verify token
        (req as AuthenticatedRequest).user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export default authenticateToken;
