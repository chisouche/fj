const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');

// Determine the environment and set the corresponding .env file
const env = process.env.NODE_ENV || 'development';
const envPath = path.resolve(__dirname, `.env.${env}`);
console.log('Loading environment variables from:', envPath); // Log the path

require('dotenv').config({ path: envPath });

console.log('Loaded Environment Variables from:', envPath); // Log the path
console.log('NODE_ENV:', process.env.NODE_ENV); // Log NODE_ENV
console.log('MONGO_URI:', process.env.MONGO_URI); // Log MONGO_URI
console.log('PORT:', process.env.PORT); // Log PORT

const app = express();

// Use body-parser middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}));

app.use('/api/auth', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
