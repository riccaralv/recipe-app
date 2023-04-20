import { useState } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage.jsx';
import RecipesPage from './components/RecipesPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import UserPage from './components/UserPage.jsx';
import ProtectRoute from './protected/ProtectedRoute.jsx';
import SingleRecipe from './components/SingleRecipe.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <div className='App'>
        <NavBar />
        {/* <h1>Recipe App</h1> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/recipes/:id' element={<SingleRecipe />} />
          <Route
            path='/register'
            element={
              <ProtectRoute>
                <RegisterPage />
              </ProtectRoute>
            }
          />
          <Route
            path='/login'
            element={
              <ProtectRoute>
                {' '}
                <LoginPage />
              </ProtectRoute>
            }
          />
          <Route path='/profile' element={<UserPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
