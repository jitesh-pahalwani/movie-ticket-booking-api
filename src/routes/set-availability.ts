import express from 'express';

import { updateAvalability } from '../db-connection/db.utils';
import { GenericError } from '../errors/generic-error';
import { SeatAvailability } from '../interfaces/interfaces';

const router = express.Router();

router.put('/movie-ticket-booking/set-availability', async (req, res) => {
    try {
        const { movieId, venueName, seatNumbers, newStatus } = req.body;
        const statusToSet = newStatus in SeatAvailability ? newStatus : SeatAvailability.empty;
        const result = await updateAvalability(venueName, movieId, seatNumbers, statusToSet);
        res.status(200).send({message: result});
    } catch (err) {
        throw new GenericError();
    }
});

export { router as setAvailabilityRouter };
