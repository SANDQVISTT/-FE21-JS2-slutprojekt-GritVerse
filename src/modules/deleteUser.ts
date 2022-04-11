import { ref, remove } from "firebase/database";
import { db } from "./firebaseApp";

/* Function for deleting your own profile */
export function deleteProfile(): void {
  const deleteProfileBtn = document.getElementById(
    "delete-account"
  ) as HTMLButtonElement;
  deleteProfileBtn.style.display = "none";

  /* temporary solution */
  let usernameID = sessionStorage.getItem("user");
  let target = sessionStorage.getItem("targetUser");
  let currentUser = target === null ? usernameID : target;
  /* checks if current user is logged in or not */
  if (sessionStorage.getItem("user") == currentUser) {
    deleteProfileBtn.style.display = "block";

    deleteProfileBtn.addEventListener("click", (e) => {
      let deleteAccountBtn = confirm("Are you sure?");
      if (deleteAccountBtn) {
        const deleteUser = ref(
          db,
          "/users/userInfo/" + sessionStorage.getItem("user")
        );
        sessionStorage.clear();
        remove(deleteUser);
        window.location.href = "./index.html";
      } else {
        deleteProfileBtn.style.display = "none";
      }
    });
  }
}
