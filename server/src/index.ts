import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import { homeRouter } from "./routes/home";
import { notesRouter } from "./routes/notes";

dotenv.config();

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 8000;

const app = express();

// middlewares definitions
app.use(cors());
app.use(helmet());
app.use(express.json());

// routes definitions
app.use("/", homeRouter);
app.use("/api/v1/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`HTTP server listening at http://${HOSTNAME}:${PORT}`);
});
