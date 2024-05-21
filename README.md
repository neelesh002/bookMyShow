# BookMyShow API

## Description

This is the backend API for the BookMyShow application, which handles movie bookings.

## Installation

1. Clone the repository:

git clone https://github.com/neelesh002/bookMyShow.git


2. Install dependencies:


3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

PORT=8080
MONGODB_URI=<your_mongodb_uri>


## Usage

### Starting the server

To start the server, run:

npm start


The server will start running on http://localhost:8080/ by default.

### API Documentation

The API documentation is generated using Swagger. You can access it at:

http://localhost:8080/



## API Endpoints

### GET /api/booking

Retrieves information about the last movie booking.

### POST /api/booking

Creates a new movie booking.

**Request Body:**

```json
{
  "movie": "Movie Name",
  "seats": ["Seat 1", "Seat 2"],
  "slot": "Time Slot"
}
