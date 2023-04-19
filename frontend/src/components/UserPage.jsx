import { useContext } from 'react';
import { MyContext } from "../context/Context"
import { Navigate } from 'react-router-dom';
import { BigHead } from '@bigheads/core'; // npm install @bigheads/core --save

export default function UserPage() {
  const { user, setUser } = useContext(MyContext);

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
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
              <h3>{user.email}</h3>
               <img src={user.profileImage} alt='' /> 
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