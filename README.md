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

## Request and Response
For /get-movies API
```
GET
ec2-18-217-212-15.us-east-2.compute.amazonaws.com:4000/movie-ticket-booking/get-movies
```
```
[
    {
        "_id": "5fde0b1fa4f474dc05954be6",
        "movie_id": "001",
        "title": "Bad Boys for Life",
        "year": "2020",
        "rated": "R",
        "released": "17 Jan 2020",
        "runtime": "124 min",
        "genre": "Action, Comedy, Crime, Thriller",
        "director": "Adil El Arbi, Bilall Fallah",
        "writer": "Peter Craig (story by), Joe Carnahan (story by), Chris Bremner (screenplay by), Peter Craig (screenplay by), Joe Carnahan (screenplay by), George Gallo (based on characters created by)",
        "actors": "Will Smith, Martin Lawrence, Vanessa Hudgens, Alexander Ludwig",
        "plot": "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
        "language": "English, Spanish",
        "country": "USA, Mexico",
        "awards": "6 nominations.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    ...
]
```

For /get-venues API
```
GET
ec2-18-217-212-15.us-east-2.compute.amazonaws.com:4000/movie-ticket-booking/get-venues
```
```
[
    "Inox High Street",
    "PVR Sky Avenue",
    "Inox Blue Abode",
    "PVR Warm Cloud"
]
```

For /get-availability API
```
GET
ec2-18-217-212-15.us-east-2.compute.amazonaws.com:4000/movie-ticket-booking/get-availability/001/PVR Sky Avenue
```
```
[
    {
        "seat_number": "1",
        "status": "empty",
        "cost": 200
    },
    {
        "seat_number": "2",
        "status": "empty",
        "cost": 200
    },
    ...
]
```

For /set-availability API
```
PUT
ec2-18-217-212-15.us-east-2.compute.amazonaws.com:4000/movie-ticket-booking/set-availability

{
    "movieId": "001",
    "venueName": "Inox High Street",
    "seatNumbers": ["10", "11"],
    "newStatus": "reserved"
}
```
```
{
    "message": "Booking updated successfully"
}
```