import express from 'express';
import cors from 'cors';
import trendRouter  from "../src/routes/trendRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(trendRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));