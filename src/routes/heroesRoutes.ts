import { Router } from 'express';
import {
    getHeroes,
    addHero,
    deleteHero,
    updateHero,
    getHeroById,
} from '../controllers/heroesController';

const router = Router();

/**
 * @swagger
 * /heroes:
 *   get:
 *     tags:
 *       - Heroes
 *     summary: Get a list of heroes
 *     description: Returns a list of all the heroes in the database.
 *     responses:
 *       200:
 *         description: A list of heroes
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
router.get('', getHeroes);

/**
 * @swagger
 * /heroes/{id}:
 *   get:
 *     tags:
 *       - Heroes
 *     summary: Get a specific hero by ID
 *     description: Returns a hero based on the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the hero
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A hero object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 universe:
 *                   type: string
 *                 powers:
 *                   type: array
 *                   items:
 *                     type: string
 *                 origin:
 *                   type: string
 *                 weakness:
 *                   type: string
 *                 backstory:
 *                   type: string
 *       404:
 *         description: Hero not found
 */
router.get('/:id', getHeroById);

/**
 * @swagger
 * /heroes:
 *   post:
 *     tags:
 *       - Heroes
 *     summary: Add a new hero
 *     description: Create a new hero by providing the required fields.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - universe
 *               - powers
 *               - origin
 *               - weakness
 *               - backstory
 *             properties:
 *               name:
 *                 type: string
 *               universe:
 *                 type: string
 *               powers:
 *                 type: array
 *                 items:
 *                   type: string
 *               origin:
 *                 type: string
 *               weakness:
 *                 type: string
 *               backstory:
 *                 type: string
 *     responses:
 *       201:
 *         description: Hero successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 hero:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     universe:
 *                       type: string
 *                     powers:
 *                       type: array
 *                       items:
 *                         type: string
 *                     origin:
 *                       type: string
 *                     weakness:
 *                       type: string
 *                     backstory:
 *                       type: string
 */
router.post('', addHero);

/**
 * @swagger
 * /heroes/{id}:
 *   delete:
 *     tags:
 *       - Heroes
 *     summary: Delete a hero by ID
 *     description: Deletes the hero with the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the hero to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hero deleted successfully
 *       404:
 *         description: Hero not found
 */
router.delete('/:id', deleteHero);

/**
 * @swagger
 * /heroes/{id}:
 *   put:
 *     tags:
 *       - Heroes
 *     summary: Update a hero by ID
 *     description: Updates the hero with the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the hero to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               universe:
 *                 type: string
 *               powers:
 *                 type: array
 *                 items:
 *                   type: string
 *               origin:
 *                 type: string
 *               weakness:
 *                 type: string
 *               backstory:
 *                 type: string
 *     responses:
 *       200:
 *         description: Hero updated successfully
 *       404:
 *         description: Hero not found
 */
router.put('/:id', updateHero);

export default router;
