import { Router } from 'express';
import {
    getHeroes,
    addHero,
    deleteHero,
    updateHero,
    getHeroById,
} from '../controllers/heroesController';

const router = Router();

// Define the GET heroes route
router.get('/heroes', getHeroes);

// Define the GET specific hero route
router.get('/heroes/:id', getHeroById);

// Route to add a hero
router.post('/heroes', addHero);

// Route to delete a hero by ID
router.delete('/heroes/:id', deleteHero);

// Route to update a hero by ID
router.put('/heroes/:id', updateHero);

export default router;
