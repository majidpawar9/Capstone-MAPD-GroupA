import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect("mongodb+srv://majidpawar:majidpawar@estate.dg4lgyq.mongodb.net/?retryWrites=true&w=majority")

const app = express();

app.use(express.json());

app.listen(3000,() => {
    console.log("Server is running on port 3000!!!");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);