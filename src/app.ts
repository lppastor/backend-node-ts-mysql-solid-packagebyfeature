import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();
app.use(router);

app.use(cors());
app.use(express.json());

export { app };
