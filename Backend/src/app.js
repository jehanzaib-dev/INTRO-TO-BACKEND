import express from 'express';

import router from './routes/userRoutes.js';

const app=express();

app.use(express.json());
app.use("/api/v1/users", router);

export default app;
