import express from 'express';
// import { PORT } from './config/env';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';

import subscriptionRouter from './routes/subscription.routes.js';

import authRouter from './routes/auth.routes.js';
import connectToDatabase from './config/database/mongodb.js';


const app = express();

//middleware
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);

app.use('/api/v1/subscriptions', subscriptionRouter);


app.get('/', (req, res) => {
    // console.log("Server created successfully");
    res.send("welcome to the subscription tracker API!");
});

app.listen(PORT, async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);

await connectToDatabase();
});

export default app; 