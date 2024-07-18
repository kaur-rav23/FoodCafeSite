

const express = require('express');
const mongoDB = require('./db'); // Ensure the path is correct
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoDB();

// Middleware setup
app.use(cors({
    origin: 'http://localhost:3000', // Allow only this origin to access the server
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/DisplayData'));
app.use('/api', require('./routes/OrderData'));
app.use('/api', require('./routes/UserData'));
app.use('/api', require('./routes/UpdateProfile'));
app.use('/api', require('./routes/ChangePassword'));
app.use('/api', require('./routes/OffersData'));



// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
