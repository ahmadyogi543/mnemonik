export function validateIdParam(id: number): [valid: boolean, message: string] {
  if (Number.isNaN(id)) {
    return [false, "invalid id format, should be numeric"];
  }
  if (id <= 0) {
    return [false, "invalid id, should be greater than 0"];
  }

  return [true, ""];
}

export function validateNoteContent(
  title: string | undefined,
  body: string | undefined
): [valid: boolean, message: string] {
  if (title === undefined || body === undefined) {
    return [false, "cannot find 'title' or 'body' field"];
  }

  if (title.trim().length === 0 || body.trim().length === 0) {
    return [false, "the 'title' or 'body' field should not be empty"];
  }

  if (title.trim().length > 32) {
    return [false, "the 'title' field should not have more than 32 characters"];
  }

  return [true, ""];
}
