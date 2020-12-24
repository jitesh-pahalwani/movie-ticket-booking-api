import { Cursor } from 'mongodb';
import { GenericError } from '../errors/generic-error';

import { BookingsInterface, MoviesInterface, SeatAvailability, SeatInterface, VenuesInterface } from '../interfaces/interfaces';
import mongodbClient from './db.instance';

/* Method to get all movies from database */
export const getMovies = async (): Promise<Array<MoviesInterface>> => {
    const moviesCollection: Cursor = mongodbClient.db('movie-ticket-booking').collection('movies').find();
    const moviesArray: Array<MoviesInterface> = await moviesCollection.toArray();
    return moviesArray;
}

/* Method to get all venues */
export const getVenues = async (): Promise<Array<string>> => {
    const bookingsCollection: Cursor = mongodbClient.db('movie-ticket-booking').collection('bookings').find();
    const venuesArray: Array<VenuesInterface> = await bookingsCollection.toArray();
    const resultArray: Array<string> = [];
    venuesArray.forEach((item) => resultArray.push(item.venue_name));
    return resultArray;
}

/* Method to get seat availabilities at a venue for a movie */
export const getVenueAvailability = async (venueName: string, movieId: string): Promise<Array<SeatInterface> | null> => {
    const venueAvailability: VenuesInterface | null = await mongodbClient.db('movie-ticket-booking').collection('bookings')
    .findOne({venue_name: venueName});

    if(venueAvailability){
        const venueAndMovieSelection: Array<BookingsInterface> = venueAvailability.bookings.filter((item: BookingsInterface) => item.movie_id == movieId);
        return venueAndMovieSelection[0].seats;
    }

    throw new GenericError();
}

/* Method to update seat availability for a movie at a venue */
export const updateAvalability = async (
    venueName: string, 
    movieId: string, 
    seatNumbers: Array<string>, 
    newStatus: SeatAvailability
): Promise<string | null> => {
    const venueAvailability: VenuesInterface | null = await mongodbClient.db('movie-ticket-booking').collection('bookings')
    .findOne({venue_name: venueName});

    if(venueAvailability){
        venueAvailability.bookings.forEach((item) => {
            if(item.movie_id == movieId){
                seatNumbers.forEach((seatNumber) => {
                    item.seats.forEach((seats) => {
                        if(seatNumber == seats.seat_number){
                            seats.status = SeatAvailability[newStatus];
                        }
                    })
                })
            }
        });

        const updateResult = await mongodbClient.db('movie-ticket-booking').collection('bookings')
        .updateOne({venue_name: venueName}, {
            $set: {
            bookings: venueAvailability.bookings
          }
        });
        
        if(updateResult.result.ok){
            return "Booking updated successfully";
        }
    }

    throw new GenericError();
}