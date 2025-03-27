import { Router } from 'express';
import { getVillains } from '../controllers/villainsController';

const router = Router();

// Define the GET /heroes route
router.get('/villains', getVillains);

export default router;
