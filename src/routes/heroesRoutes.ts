import { Router } from 'express';
import { getHeroes } from '../controllers/heroesController';

const router = Router();

// Define the GET /heroes route
router.get('/heroes', getHeroes);

export default router;