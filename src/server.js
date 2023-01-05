import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
//import trendRouter  from "../src/routes/trendRouter.js";

import serverRouter  from "./routes/serverRouter.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use(serverRouter)


dotenv.config();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));