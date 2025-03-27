import { Router } from 'express';
import {
    getHeroes,
    addHero,
    deleteHero,
    updateHero,
} from '../controllers/heroesController';

const router = Router();

// Define the GET /heroes route
router.get('/heroes', getHeroes);

// Route to add a hero
router.post('/heroes', addHero);

// Route to delete a hero by ID
router.delete('/heroes/:id', deleteHero);

// Route to update a hero by ID
router.put('/heroes/:id', updateHero);

export default router;
