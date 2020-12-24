import express from 'express';

import { getVenues } from '../db-connection/db.utils';
import { GenericError } from '../errors/generic-error';

const router = express.Router();

router.get('/movie-ticket-booking/get-venues', async (req, res) => {
    try {
        const venuesResult: Array<string> = await getVenues();
        res.status(200).send(venuesResult);
    } catch (err) {
        throw new GenericError();
    }
});

export { router as getVenuesRouter };
