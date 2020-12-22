import { Cursor } from 'mongodb';

import { MoviesInterface } from '../interfaces/interfaces';
import mongodbClient from './db.instance';

export const getMovies = async (): Promise<Array<MoviesInterface>> => {
    const moviesCollection: Cursor = mongodbClient.db('movie-ticket-booking').collection('movies').find();
    const moviesArray: Array<MoviesInterface> = await moviesCollection.toArray();
    return moviesArray;
}