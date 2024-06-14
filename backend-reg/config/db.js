const mongoose = require('mongoose');
const path = require('path');

const loadEnvironmentVariables = () => {
    const env = process.env.NODE_ENV || 'development';
    const envPath = path.resolve(__dirname, `../.env.${env}`);
    require('dotenv').config({ path: envPath });

    console.log('Loaded Environment Variables from:', envPath); // Log the path
    console.log('NODE_ENV:', process.env.NODE_ENV); // Log NODE_ENV
    console.log('MONGO_URI:', process.env.MONGO_URI); // Log MONGO_URI
};

const connectDB = async () => {
    loadEnvironmentVariables();

    try {
        const uri = process.env.MONGO_URI;
        console.log('MONGO_URI:', uri); // Debug: log the URI
        if (!uri) {
            throw new Error('MONGO_URI is not defined');
        }
        
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: process.env.NODE_ENV === 'production', // Enable TLS for production
            tlsCAFile: process.env.CA_CERT_PATH,       // Path to CA certificate if required
        };

        await mongoose.connect(uri, options);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
