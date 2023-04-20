import { useContext, useState } from 'react';
import { MyContext } from '../context/Context';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { BigHead } from '@bigheads/core'; // npm install @bigheads/core --save

export default function UserPage() {
	const {
		user,
		setUser,
		name,
		setName,
		description,
		setDescription,
		ingredients,
		setIngredients,
		method,
		setMethod,
	} = useContext(MyContext);

	const [recipe, setRecipe] = useState({
		Name: '',
		Description: '',
	});

	const logoutUser = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	const createRecipe = (e) => {
		e.preventDefault();
		console.log('click');
		const recipe = {
			Name: e.target.recipe_name.value,
			Description: e.target.recipe_description.value,
			Author: e.target.recipe_author.value,
			Ingredients: e.target.recipe_ingredients.value.split(','),
			Method: e.target.recipe_method.value.split(','),
		};
		console.log(recipe);
		axios.post('/recipes', JSON.stringify(recipe), {
			headers: { 'Content-Type': 'application/json' },
		});
	};

	if (user) {
		return (
			<div>
				<h1>User Page</h1>
				<div>
					{user && (
						<>
							<h2>
								{user.firstName} {user.lastName}
							</h2>
							<p> Create Recipe :</p>

							<form onSubmit={createRecipe}>
								<label htmlFor="">Recipe Name</label>
								<input name="recipe_name" /> <br />
								<label htmlFor="">Description</label>
								<input type="text" name="recipe_description" />
								<br />
								<label htmlFor="">Author</label>
								<input
									type="text"
									name="recipe_author"
									value={user.firstName + (" ") + user.lastName}
								/>
								<br />
								<label htmlFor="">Ingredients</label>
								<textarea
									rows="10"
									cols="25"
									name="recipe_ingredients"
                  placeholder='Put a space between the Ingredians'
								/>
								<br />
								<label htmlFor="">Method</label>
								<textarea
									rows="10"
									cols="25"
									name="recipe_method"
								/>
								<button>Create Recipe</button>
							</form>
							{/* <h3>{user.email}</h3> */}
							{/* <img src={user.profileImage} alt='' />  */}
							<button onClick={logoutUser}>Logout</button>
						</>
					)}
				</div>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
}
