import express from "express";

import { welcomeHandler } from "../handlers/welcomeHandler";

export const homeRouter = express.Router();

homeRouter.get("/", welcomeHandler);
