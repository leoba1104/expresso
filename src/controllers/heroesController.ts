import { Request, Response } from 'express';
import Hero from '../models/Hero';

// Controller to handle getting all heroes
export const getHeroes = async (_: Request, res: Response): Promise<void> => {
    try {
        // Fetch all heroes from the database
        const heroes = await Hero.find(); // This returns all heroes in the Hero collection

        // Return the heroes in the response
        res.json(heroes);
    } catch (error) {
        // Handle any errors that occur during the database query
        res.status(500).json({ message: 'Error fetching heroes', error });
    }
};

// Controller to handle getting a hero by ID
export const getHeroById = async (req: Request, res: Response): Promise<void> => {
    try {
        const heroId = req.params.id;

        // Find hero by ID
        const hero = await Hero.findById(heroId);

        if (!hero) res.status(404).json({ message: 'Hero not found' });

        // Return the found hero
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hero', error });
    }
};

// Controller to handle adding heroes
export const addHero = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, universe, powers, origin, weakness, backstory } =
            req.body;

        // Create new hero
        const hero = new Hero({
            name,
            universe,
            powers,
            origin,
            weakness,
            backstory,
        });

        // Save hero to DB
        await hero.save();
        res.status(201).json({ message: 'Hero created successfully', hero });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create hero', error });
    }
};

// Controller to handle deleting a hero
export const deleteHero = async (req: Request, res: Response): Promise<void> => {
    try {
        const heroId = req.params.id;

        // Find and delete hero
        const hero = await Hero.findByIdAndDelete(heroId);

        if (!hero) res.status(404).json({ message: 'Hero not found' });

        res.status(200).json({ message: 'Hero deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete hero', error });
    }
};

// Controller to handle updating a hero
export const updateHero = async (req: Request, res: Response) => {
    try {
        const heroId = req.params.id;
        const { name, universe, powers, origin, weakness, backstory } =
            req.body;

        // Find hero by ID and update it with the new data
        const hero = await Hero.findByIdAndUpdate(
            heroId,
            { name, universe, powers, origin, weakness, backstory },
            { new: true } // This returns the updated hero object
        );

        if (!hero) res.status(404).json({ message: 'Hero not found' });

        res.status(200).json({ message: 'Hero updated successfully', hero });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update hero', error });
    }
};
