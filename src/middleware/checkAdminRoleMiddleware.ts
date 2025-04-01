import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './authMiddleware';

const checkAdminRole = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): void => {
    const user = req.user as { role: string };
    if (user.role !== 'Admin')
        res.status(403).json({
            message: 'Access denied. Admin role required.',
        });
    next();
};

export default checkAdminRole;
