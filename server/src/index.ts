import express from "express";
import cors from "cors";
import helmet from "helmet";

import { homeRouter } from "./routes/home";
import { notesRouter } from "./routes/notes";
import { notFoundHandler } from "./handlers/utils/notFoundHandler";

import config from "./config";

const { HOSTNAME, PORT } = config;
const app = express();

// middlewares definitions
app.use(cors());
app.use(helmet());
app.use(express.json());

// routes definitions
app.use("/", homeRouter);
app.use("/api/notes", notesRouter);

// for any undefined routes
app.all("/*", notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://${HOSTNAME}:${PORT}`);
});
