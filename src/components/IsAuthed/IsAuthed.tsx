export function IsAuthed(): boolean {
  const loggedUserJSON: string | null = localStorage.getItem("isLogged");

  if (loggedUserJSON == null) return false;

  return JSON.parse(loggedUserJSON);
}
