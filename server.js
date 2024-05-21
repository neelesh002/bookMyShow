const express = require('express');
const connectDB = require('./connection');
const Movie = require('./Schema')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



 

const options = {
  swaggerDefinition: {
      info: {
          title: 'Booking API',
          version: '1.0.0',
          description: 'API for managing movie bookings',
      },
  },
  apis: ["./swagger/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 
app.get("/api/booking", async (req, res) => {
    try {
        const lastBooking = await Movie.findOne().sort({ date_created: -1 });
        if (!lastBooking) {
            return res.status(404).json({ message: "No previous booking found" });
        }
        const { movie, seats, slot } = lastBooking;
        res.status(200).json({ movie, seats, slot });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.post("/api/booking", async (req, res) => {
    const { movie, seats, slot } = req.body;

    if (!movie || !seats || !slot) {
        return res.status(400).json({ message: "Movie name, seats, and slot are required." });
    }

    try {
        const newMovie = new Movie({
            movie,
            seats,
            slot
        });
        await newMovie.save();

        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

  connectDB()
  .then(() => {

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to DB:', err);
  });