import React from 'react';

function RecipeForm() {
	return (
		<div className="form">
			<form onSubmit={createRecipe}>
				<p> Create Recipe :</p>
				<label htmlFor="">Recipe Name</label>
				<input name="recipe_name" /> <br />
				<label htmlFor="">Description</label>
				<input type="text" name="recipe_description" />
				<br />
				<label htmlFor="">Author</label>
				<input
					type="text"
					name="recipe_author"
					value={user.firstName}
				/>
				<br />
				{/* <label htmlFor=''>Ingredients</label>
                    <textarea rows='10' cols='25' name='recipe_ingredients' />
                    <br /> */}
				{/*  */}
				<label htmlFor="ingredient">Ingredient</label>
				<input type="text" id="ingredient" name="ingredient" />
				<button type="button" onClick={addIngredient}>
					+
				</button>
				<br />
				<ol>
					{ingredients.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ol>
				{/*  */}
				{/* <label htmlFor=''>Method</label>
                    <textarea rows='10' cols='25' name='recipe_method' /> */}
				<label htmlFor="method">Method</label>
				<input type="text" id="method" name="method" />
				<button type="button" onClick={addStep}>
					+
				</button>
				<br />
				<ol>
					{method.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ol>
				<button>Create Recipe</button>
			</form>
		</div>
	);
}

export default RecipeForm;
