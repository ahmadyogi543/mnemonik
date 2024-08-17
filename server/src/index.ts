import express from "express";
import cors from "cors";
import helmet from "helmet";

import config from "./config";
import { homeRouter } from "./routes/home";
import { notesRouter } from "./routes/notes";

const { HOSTNAME, PORT } = config;
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
