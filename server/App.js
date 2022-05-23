import express from 'express';
import trailerRoutes from './Routes/Trailer.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use(trailerRoutes);

export default app;