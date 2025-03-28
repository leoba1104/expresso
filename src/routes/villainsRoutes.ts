import { Router } from 'express';
import { getVillains } from '../controllers/villainsController';

const router = Router();

/**
 * @swagger
 * /villains:
 *   get:
 *     tags:
 *       - Villains
 *     summary: Get a list of villains
 *     description: Returns a list of all the villains in the database.
 *     responses:
 *       200:
 *         description: A list of villains
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   universe:
 *                     type: string
 *                   powers:
 *                     type: array
 *                     items:
 *                       type: string
 *                   origin:
 *                     type: string
 *                   weakness:
 *                     type: string
 *                   backstory:
 *                     type: string
 */
router.get('', getVillains);

export default router;
