export interface MoviesInterface {
    movie_id: string;
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
}

export interface VenuesInterface {
    venue_name: string;
    bookings: Array<BookingsInterface>;
}

export interface BookingsInterface {
    movie_id: string;
    seats: Array<SeatInterface>;
}

export interface SeatInterface {
    seat_number: string;
    status: SeatAvailability;
    cost: number;
}

export enum SeatAvailability {
    empty = "empty",
    reserved = "reserved",
    locked = "locked",
}