import express from 'express';

import { getMovies } from '../db-connection/db.utils';
import { GenericError } from '../errors/generic-error';
import { MoviesInterface } from '../interfaces/interfaces';

const router = express.Router();

router.get('/movie-ticket-booking/get-movies', async (req, res) => {
    try {
        const moviesResult: Array<MoviesInterface> = await getMovies();
        res.status(200).send(moviesResult);
    } catch (err) {
        throw new GenericError();
    }
});

export { router as getMoviesRouter };
