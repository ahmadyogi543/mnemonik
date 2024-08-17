import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 8000;

const app: Application = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`HTTP server listening at http://${HOSTNAME}:${PORT}`);
});
