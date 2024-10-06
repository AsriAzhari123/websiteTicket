const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/produkRoutes');

const app = express();
const port = 3001;

// Middleware CORS: Mengizinkan permintaan dari localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', // Izinkan permintaan dari frontend
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Metode HTTP yang diizinkan
  allowedHeaders: ['Content-Type', 'Authorization'] // Header yang diizinkan
}));

app.use(bodyParser.json());

const uri = 'mongodb+srv://websitetiket:tiket123@cluster0.hgg3m54.mongodb.net/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB with Mongoose!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/api', userRoutes);
app.use('/produk', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
