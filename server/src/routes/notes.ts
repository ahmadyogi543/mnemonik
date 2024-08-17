import express from "express";

export const notesRouter = express.Router();

notesRouter.get("/", (req, res) => {
  res.send({
    message: "get all notes",
  });
});

notesRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send({
    message: `get a note with id ${id}`,
  });
});

notesRouter.post("/", (req, res) => {
  res.send({
    message: "create a new note",
  });
});

notesRouter.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send({
    message: `update a note with id: ${id}`,
  });
});

notesRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send({
    message: `delete a note with id: ${id}`,
  });
});
