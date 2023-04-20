import { useLocation } from 'react-router-dom';

const SingleRecipe = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {location.state && (
        <div>
          <h2>{`${location.state.Author}, by ${location.state.Author}`}</h2>
          <p>{location.state.Description}</p>
          <p>Here you can find all the ingredients:</p>

          <p>Follow the instructions:</p>

          {/* <p>{location.state.Ingredients}</p> */}
        </div>
      )}
    </div>
  );
};
export default SingleRecipe;
