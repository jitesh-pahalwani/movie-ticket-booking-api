import express from 'express';

import { getVenueAvailability } from '../db-connection/db.utils';
import { GenericError } from '../errors/generic-error';

const router = express.Router();

router.get('/movie-ticket-booking/get-availability/:movieId/:venueName', async (req, res) => {
    try {
        const { movieId, venueName } = req.params;
        const result = await getVenueAvailability(venueName, movieId);
        res.status(200).send(result);
    } catch (err) {
        throw new GenericError();
    }
});

export { router as getAvailabilityRouter };
