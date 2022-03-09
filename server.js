const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');   
const todoRoute = require('./routes/todo');
const userRoute = require('./routes/user');

const connectDB = require('./config/db');
dotenv.config({ path: './env' });
connectDB();

const app = express();
app.use(express.json());

if (process.env.MODE === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.use('/api/todos', todoRoute);
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
    res.send('Todo bien');
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));