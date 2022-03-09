const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {

        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1);
    }

}

module.exports = connectDB;