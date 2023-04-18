import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connecting DB
mongoose
  .connect(process.env.URI)
  .then(() => console.log('Connection to DB done'))
  .catch((err) => console.log(err.message));

//Middlewares
app.use(express.json());

// test connection
app.get('/', (req, res) => {
	res.send('hello world');
});

// running server
app.listen(PORT, () => console.log('Server is running on PORT', PORT));
