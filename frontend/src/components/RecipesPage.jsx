import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/Context';

const URL = 'http://localhost:3000/recipes';

function RecipesPage() {
  // states
  const { recipes, setRecipes, bookmarks, setBookmarks } =
    useContext(MyContext);

  // actions
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setRecipes(data.data);
      });
  }, []);

  // CAN WE DELETE THIS FUNCTION?
  const tryFunction = () => {
    axios.get('/recipes/:id');
    console.log('try');
  };

  const addToBookmark = (recipe) => {
    const exist = bookmarks.find((item) => item._id === recipe._id);

    if (!exist) {
      setBookmarks((prevBookmarks) => [...prevBookmarks, recipe]);
      console.log(`Added "${recipe.Name}" to bookmarks.`);
      console.log('Bookmarks:', bookmarks);
    }
  };

  useEffect(() => {
    console.log('Bookmarks:', bookmarks);
  }, [bookmarks]);

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
            <div style={{ margin: '5px' }}>
              <Link to={`${recipe._id}`} state={recipe}>
                <button>See more</button>
              </Link>
              <button onClick={() => addToBookmark(recipe)}>Save</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipesPage;
