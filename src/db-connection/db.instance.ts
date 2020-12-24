import { MongoClient } from 'mongodb';

import { DatabaseConnectionError } from '../errors/db-connection-error';

/* URI to connect to MongoDB instance */
const uri: string = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.78x23.mongodb.net/movie-ticket-booking?retryWrites=true&w=majority`;

const client: MongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

/* Connecting to MongoDB client */
client.connect((err: Error) => {
    if(err){
        throw new DatabaseConnectionError();
    }
});

export default client;
