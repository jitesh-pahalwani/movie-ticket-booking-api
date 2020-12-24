# Movie Ticket Booking App API
An API built using NodeJS, for a simple movie ticket booking app.

## Features
- API is hosted at ec2-18-217-212-15.us-east-2.compute.amazonaws.com:4000/
- MongoDB Cloud is used for Database.
- Proper error handling.
- Built using Typescript.

## How to run
1. Run the following commands to clone the repository and move to the cloned directory
```
git clone git@github.com:jitesh-pahalwani/movie-ticket-booking-api.git
cd movie-ticket-booking-api
```
2. Create a .env file with the following variables in it
- PORT_NUMBER (preferably 4000)
- MONGODB_USERNAME (username of MongoDB instance)
- MONGODB_PASSWORD (password of MongoDB instance)

3. Run the following docker commands
```
docker build -t movie-ticket-booking .
docker run -p 4000:4000 movie-ticket-booking
```