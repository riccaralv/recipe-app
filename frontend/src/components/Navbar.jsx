import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/Context.js';

function NavBar() {
	const { user } = useContext(MyContext);
	return (
		<nav>
			<ul className="navbar">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/recipes">Recipes</NavLink>
				</li>
				{user ? (
					<li>
						<NavLink to="/profile">Profile</NavLink>
					</li>
				) : (
					<>
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
						<li>
							<NavLink to="/register">Register</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default NavBar;
