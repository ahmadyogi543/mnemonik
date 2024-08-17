export type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GetNotesProps = { notes: Note[]; error: Error | null };

export type GetNoteProps = {
  note: Note | undefined;
  error: Error | null;
};

export type CreateNoteProps = {
  note: Note | undefined;
  error: Error | null;
};

export type DestroyNoteProps = {
  status: "success" | "failed";
  error: Error | null;
};
