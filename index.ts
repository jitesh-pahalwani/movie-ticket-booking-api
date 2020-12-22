require('dotenv').config();

import express from 'express';
import cors from 'cors';

import { getMoviesRouter } from './src/routes/get-movies';

import { errorHandler } from './src/middlewares/error-handler';

const app = express();
app.use(express.json());
app.use(cors());

app.use(getMoviesRouter);

app.use(errorHandler);

app.listen(process.env.PORT_NUMBER, () => {
  return console.log(`Listening on port ${process.env.PORT_NUMBER}`);
});