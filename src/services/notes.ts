export function addNote(title: string, body: string) {
  const now = new Date();

  return {
    id: Math.floor(Math.random() * (1000 - 0 + 1)) + 0,
    title: title,
    body: body,
    createdAt: now,
    updatedAt: now,
  };
}

export function updateNote(id: number, title: string, body: string) {
  const now = new Date();

  return {
    id,
    title,
    body,
    updatedAt: now,
  };
}
