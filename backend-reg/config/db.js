const mongoose = require('mongoose');
require('dotenv').config({
path: `.env.${process.env.NODE_ENV || 'development'}`
});

console.log('NODE_ENV:', process.env.NODE_ENV); // Debug: log NODE_ENV
console.log('MONGO_URI:', process.env.MONGO_URI); // Debug: log MONGO_URI

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        console.log('MONGO_URI:', uri); // Debug: log the URI
        if (!uri) {
            throw new Error('MONGO_URI is not defined');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
