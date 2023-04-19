import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/recipes">Recipes</NavLink>
				</li>
				<li>
					<NavLink to="/user">Profile</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
				<li>
					<NavLink to="/register">Register</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
