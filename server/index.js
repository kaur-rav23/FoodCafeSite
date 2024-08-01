const express = require('express');
const mongoDB = require('./db');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

mongoDB();


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/DisplayData'));
app.use('/api', require('./routes/OrderData'));
app.use('/api', require('./routes/UserData'));
app.use('/api', require('./routes/OffersData'));
app.use('/api', require('./routes/DisplayPackages'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
