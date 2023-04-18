import express from 'express';
const router = express.Router();

import {
	getAllRecipes,
	addNewRecipe,
	getSingleRecipe,
	updateRecipe,
	deleteRecipe,
} from '../controllers/recipeController.js';

router.get('/', getAllRecipes);
router.get('/:id', getSingleRecipe);

export default router;
