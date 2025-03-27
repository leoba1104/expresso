import { Request, Response } from 'express';
import Villain from '../models/Villain';

// Controller function to handle /villains route
export const getVillains = async (
    _req: Request,
    _res: Response
): Promise<void> => {
    try {
        // Fetch all villains from the database
        const villains = await Villain.find();

        // Return the villains in the response
        _res.json(villains);
    } catch (error) {
        _res.status(500).json({ message: 'Error fetching villains', error });
    }
};
