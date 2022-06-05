export function IsAuthed(): boolean {
  const loggedUserJSON: string | null = localStorage.getItem("isLogged");

  if (loggedUserJSON == null) return false;

  return JSON.parse(loggedUserJSON);
}

export function HandleSignIn(user: User): void {
  localStorage.setItem("isLogged", JSON.stringify(true));
  localStorage.setItem("loggedUser", JSON.stringify(user));
}

export function HandleLogout(): void {
  localStorage.setItem("isLogged", JSON.stringify(false));
  localStorage.removeItem("loggedUser");
}

export function GetLoggedUser(): User | undefined | null {
  const loggedUserItem: string | null = localStorage.getItem("loggedUser");

  if (!loggedUserItem) return;

  const loggedUser: User | null = JSON.parse(loggedUserItem);

  return loggedUser;
}
