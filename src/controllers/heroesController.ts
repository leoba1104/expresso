import { Request, Response } from 'express';

// Controller function to handle /heroes route
export const getHeroes = (req: Request, res: Response): void => {
    const heroes = [
        { id: 1, name: 'Superman' },
        { id: 2, name: 'Batman' },
    ];
    res.json(heroes);
};