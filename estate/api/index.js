import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';

mongoose.connect("mongodb+srv://majidpawar:majidpawar@estate.dg4lgyq.mongodb.net/?retryWrites=true&w=majority")

const app = express();

app.listen(3000,() => {
    console.log("Server is running on port 3000!!!");
});

app.use('/api/user', userRouter);