import RecipeCollection from '../models/recipeSchema.js';

export const getAllRecipes = async (req, res) => {
	try {
		const recipes = await RecipeCollection.find();
		res.json({ success: true, data: recipes });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const addNewRecipe = async (req, res) => {
	try {
		const recipe = new RecipeCollection(req.body);
		await recipe.save();
		res.json({ success: true, data: recipe });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const getSingleRecipe = async (req, res) => {
	try {
		const { id } = req.params;
		const recipe = await RecipeCollection.findById(id);
		if (recipe) {
			res.json({ success: true, data: recipe });
		} else {
			res.json({ success: false, message: 'please provide valid id' });
		}
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const updateRecipe = async (req, res) => {
	try {
		const { id } = req.params;
		const recipe = await RecipeCollection.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json({ success: true, data: recipe });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const deleteRecipe = async (req, res) => {
	try {
		const { id } = req.params;
		const recipe = await RecipeCollection.findByIdAndRemove(id);
		res.json({ success: true, data: recipe });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};
