const path = require('path');

// Explicitly specify the path to the .env file based on NODE_ENV
const envPath = path.resolve(__dirname, `.env.${process.env.NODE_ENV || 'development'}`);
require('dotenv').config({ path: envPath });

console.log('Loaded Environment Variables from:', envPath); // Log the path
console.log('NODE_ENV:', process.env.NODE_ENV); // Log NODE_ENV
console.log('MONGO_URI:', process.env.MONGO_URI); // Log MONGO_URI
console.log('PORT:', process.env.PORT); // Log PORT
