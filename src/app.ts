import express, { Request, Response } from 'express';
import { connectDatabase } from './core';
import routes from './api/routes/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app)

connectDatabase();

export default app;
