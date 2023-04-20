import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const tryFunction = () => {
    axios.get('/recipes/:id');
    console.log('try');
  };

  // render
  return (
    <div>
      <h1>Recipes</h1>

      {recipes.map((recipe) => {
        return (
          <div
            key={recipe._id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '2px solid tomato',
              margin: '10px',
            }}
          >
            <h3>{recipe.Name}</h3>
            <img src={recipe.Image} alt='' />
            {/* <button onClick={() => bookmarkRecipe(recipe)}>Bookmark</button> */}
            <div style={{ margin: '5px' }}>
              {/* <button>Read more</button> */}
              <Link to={`${recipe._id}`} state={recipe}>
                <button>See more</button>
              </Link>
              <button>Save</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipesPage;
