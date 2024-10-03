const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = 3000;


app.use(bodyParser.json());


const uri = 'mongodb+srv://pembeli:pembeli123@cluster0.hgg3m54.mongodb.net/penjualantiketdb';


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB with Mongoose!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


app.use('/api', userRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
