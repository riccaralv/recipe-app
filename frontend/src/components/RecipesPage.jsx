import React from 'react';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:3000/recipes';

function RecipesPage() {
	// states
	const [recipes, setRecipes] = useState([]);

	// actions
	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data);
				setRecipes(data.data);
			});
	}, []);
	// render
	return (
		<div>
			<h1>Recipes</h1>

			{recipes.map((recipe) => {
				return (
					<div key={recipe._id}>
						<h3>{recipe.Name}</h3>
					</div>
				);
			})}
		</div>
	);
}

export default RecipesPage;
