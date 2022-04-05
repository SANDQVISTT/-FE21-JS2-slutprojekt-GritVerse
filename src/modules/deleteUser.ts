import { ref, remove } from "firebase/database";
import { db } from "./firebaseApp";

/* const currentUser = new UserSign(); */

export function deleteProfile(): void {
  const profileDIV = document.getElementById("ProfileInfo") as HTMLInputElement;
  const deleteProfileBtn = document.createElement(
    "button"
  ) as HTMLButtonElement;
  profileDIV.append(deleteProfileBtn);
  deleteProfileBtn.innerText = "Delete profile";
  console.log(sessionStorage.getItem("user"));
  deleteProfileBtn.addEventListener("click", (e) => {
    let deleteAccountBtn = confirm("Are you sure?");
    if (deleteAccountBtn) {
      const deleteUser = ref(
        db,
        "/users/userInfo/" + sessionStorage.getItem("user")
      );
      sessionStorage.clear();
      remove(deleteUser);
      window.location.href = "/index.html";
    }
  });

  /* console.log(currentUser) */
  /* const dbRef = ref(getDatabase());
  get(child(dbRef, `users/userInfo/${currentUser.username}`)).then((snapshot) => {
    console.log(snapshot.val(), snapshot.exists());

    if (sessionStorage.getItem("user") == ) {
      deleteProfileBtn.innerText = "Delete profile";
      profileDIV.append(deleteProfileBtn);
      const deletePrf = ref(db, `/users/userInfo/${currentUser.username}`)
      remove(deletePrf)
    }
  }); */
}
