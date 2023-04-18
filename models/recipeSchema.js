import { Schema, model } from 'mongoose';

const recipeSchema = new Schema({
	Name: {
		type: String,
	},
	url: {
		type: String,
	},
	Description: {
		type: String,
	},
	Author: {
		type: String,
	},
	Ingredients: {
		type: Array,
	},
	Method: {
		type: Array,
	},
});

const RecipeCollection = model('recipe', recipeSchema);

export default RecipeCollection;
