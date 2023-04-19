import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoute from './routes/usersRoute.js';
import recipesRoute from './routes/recipesRoutes.js';
import bookmarksRoute from './routes/bookmarksRoute.js';
import cors from 'cors';
dotenv.config();

// CREATE EXPRESS SERVER
const app = express();

// PORT SETTING
const PORT = process.env.PORT || 3000;

// MONGOOSE CONNECTION
mongoose
	.connect(process.env.URI)
	.then(() => console.log('Connection to DB done'))
	.catch((err) => console.log(err.message));

// connecting Backend / Frontend
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
	next();
});

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use('/users', usersRoute);
app.use('/recipes', recipesRoute);
app.use('/bookmarks', bookmarksRoute);

/**
 * Do we add photos of the recipes? If yes, we need 'read stream'
 */

// RUNNING SERVER
app.listen(PORT, () => console.log('Server is running on PORT', PORT));
