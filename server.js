import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoute from './routes/usersRoute.js';
import recipeRoute from './routes/recipeRoutes.js';
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

// MIDDLEWARES
app.use(express.json());
app.use('/recipes', recipeRoute);

// ROUTES
app.use('/users', usersRoute);

/**
 * Do we add photos of the recipes? If yes, we need 'read stream'
 */

// RUNNING SERVER
app.listen(PORT, () => console.log('Server is running on PORT', PORT));
