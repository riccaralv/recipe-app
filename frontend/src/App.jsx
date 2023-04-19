import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage.jsx';
import RecipesPage from './components/RecipesPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import UserPage from './components/UserPage.jsx';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<NavBar />
			<h1>Recipe App</h1>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/recipes" element={<RecipesPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/user" element={<UserPage />} />
			</Routes>
		</div>
	);
}

export default App;
