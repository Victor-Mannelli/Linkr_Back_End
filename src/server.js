import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//import trendRouter  from "../src/routes/trendRouter.js";
import trendRouter from './routes/trendRouter.js';
import postRouter from './routes/postRouter.js';
import authRouter from './routes/authRouter.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(trendRouter);
app.use(postRouter);
app.use(authRouter);

dotenv.config();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));