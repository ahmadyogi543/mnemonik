export type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GetNotesProps = { notes: Note[]; error: Error | null };
