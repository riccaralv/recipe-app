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
      //   Ingredients: e.target.recipe_ingredients.value.split(','),
      Ingredients: ingredients,
      //   Method: e.target.recipe_method.value.split(','),
      Method: method,
    };
    console.log(recipe);
    axios.post('/recipes', JSON.stringify(recipe), {
      headers: { 'Content-Type': 'application/json' },
    });
  };

  // add ingredient button
  const addIngredient = (e) => {
    e.preventDefault();
    const newIngredient = document.getElementById('ingredient').value;
    setIngredients([...ingredients, newIngredient]);
    document.getElementById('ingredient').value = '';
  };

  // add method button
  const addStep = (e) => {
    e.preventDefault();
    const newStep = document.getElementById('method').value;
    setMethod([...method, newStep]);
    document.getElementById('method').value = '';
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
                <label htmlFor=''>Recipe Name</label>
                <input name='recipe_name' /> <br />
                <label htmlFor=''>Description</label>
                <input type='text' name='recipe_description' />
                <br />
                <label htmlFor=''>Author</label>
                <input
                  type='text'
                  name='recipe_author'
                  value={user.firstName}
                />
                <br />
                {/* <label htmlFor=''>Ingredients</label>
                <textarea rows='10' cols='25' name='recipe_ingredients' />
                <br /> */}
                {/*  */}
                <label htmlFor='ingredient'>Ingredient</label>
                <input type='text' id='ingredient' name='ingredient' />
                <button type='button' onClick={addIngredient}>
                  +
                </button>
                {/*  */}
                {/* <label htmlFor=''>Method</label>
                <textarea rows='10' cols='25' name='recipe_method' /> */}
                <label htmlFor='method'>Method</label>
                <input type='text' id='method' name='method' />
                <button type='button' onClick={addStep}>
                  +
                </button>
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
    return <Navigate to='/login' />;
  }
}
