export function logOut(): void {
  document.getElementById("logout-button").addEventListener("click", () => {
    sessionStorage.clear();
  });
}
// logOut();