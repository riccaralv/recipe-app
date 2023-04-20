import { useLocation } from 'react-router-dom';

const SingleRecipe = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div style={{ textAlign: 'left' }}>
      {location.state && (
        <div>
          <h2>{`${location.state.Author}, by ${location.state.Author}`}</h2>
          <p>{location.state.Description}</p>
          <p>Here you can find all the ingredients:</p>
          <ul>
            {location.state.Ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>Follow the instructions:</p>
          <ol>
            {location.state.Method.map((method, index) => (
              <li key={index} style={{ textAlign: 'left' }}>
                {method}
              </li>
            ))}
          </ol>
          <img src={location.state.Image} alt='' />
        </div>
      )}
    </div>
  );
};
export default SingleRecipe;
