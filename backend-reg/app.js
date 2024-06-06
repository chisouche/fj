const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Init middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);

module.exports = app;
