import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connecting DB
mongoose
	.connect(process.env.URI)
	.then(() => console.log('connected to DB'))
	.catch((err) => console.log(err.message));

//Middlewares
app.use(express.json());

// test connection
app.get('/', (req, res) => {
	res.send('hello world');
});

// running server
app.listen(PORT, () => console.log('server is running on PORT', PORT));
