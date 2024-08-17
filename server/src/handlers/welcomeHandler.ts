import { Request, Response } from "express";

export function welcomeHandler(_: Request, res: Response) {
  res.send({
    message:
      "Welcome to Mnemonik REST API, you can access the /api/v1/notes to start using it",
  });
}
