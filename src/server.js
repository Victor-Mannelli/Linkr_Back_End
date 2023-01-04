import express, { json } from "express";
import cors from "cors";
import serverRouter from "./routes/serverRouter.js";

const app = express();
app.use(cors());
app.use(json());

app.use(serverRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
