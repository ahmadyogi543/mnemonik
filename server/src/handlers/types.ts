export type CreateNoteData = {
  title: string | undefined;
  body: string | undefined;
};

export type DeleteNoteParams = {
  id: string;
};

export type EditNoteParams = {
  id: string;
};

export type EditNoteData = {
  title: string | undefined;
  body: string | undefined;
};

export type GetNoteParams = {
  id: string;
};
