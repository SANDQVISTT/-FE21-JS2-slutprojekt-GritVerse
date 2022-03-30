import { UserSign } from "./modules/firebaseApp";
import {
  ref,
  onValue,
  update,
  remove,
  push,
  get,
  child,
  getDatabase,
} from "firebase/database";
import { db } from "./modules/firebaseApp";
import { DisplayToDom } from "./modules/display";

const dbRef = ref(db, "/users/userInfo/");

console.log("hello world");

/* new DisplayToDom().hideRegisterElements() */

document.getElementById("login").addEventListener("click", (e) => {
  e.preventDefault();

  const username: HTMLInputElement = document.querySelector("#username");
  const password: HTMLInputElement = document.querySelector("#password");

  console.log(username.value);
  /*   console.log(password.value); */

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/userInfo/${username.value}`)).then((snapshot) => {
    if (username.value == "" || password.value == "") {
      new DisplayToDom().createErrorMsg();
    } else if (password.value == snapshot.val().password) {
      location.href = "html/home.html";
    } else if (password.value != snapshot.val().password) {
      new DisplayToDom().wrongPassword();
    } else if (snapshot.exists()) {
      console.log(snapshot.val(), "is a user");
    } else if (username.value != snapshot.val().username) {
      new DisplayToDom().doesntExist();
    }
  });
});
document.getElementById("register").addEventListener("click", (e) => {
  e.preventDefault();

  const d = new DisplayToDom();

  d.hideLoginPage();

  document.getElementById("return").addEventListener("click", (e) => {
    e.preventDefault();

    const p = new DisplayToDom();

    p.showLoginPage();
  });
});

document
  .getElementById("register-user-to-site")
  .addEventListener("click", (e) => {
    e.preventDefault;

    const username: HTMLInputElement = document.querySelector("#username");
    const password: HTMLInputElement = document.querySelector("#password");
    const gender: HTMLInputElement = document.querySelector("#gender");
    const bio: HTMLInputElement = document.querySelector("#bio");

    const newUsername:string = username.value.toLowerCase();

    if (newUsername === "" || password.value === "" || bio.value === "") {
      alert("write every block kiddo");
    } else {
      console.log("GENDER: ", document.querySelector("#gender"));
      const addUser = {
        username: (document.querySelector("#username") as HTMLInputElement)
          .value,
        password: (document.querySelector("#password") as HTMLInputElement)
          .value,
        gender: (document.querySelector("#gender") as HTMLInputElement).value,
        bio: (document.querySelector("#bio") as HTMLInputElement).value,
      };
      get(child(dbRef, `/${newUsername}`)).then((snapshot) => {
        console.log(snapshot.val(), snapshot.exists());
        if (snapshot.exists()) {
          alert("this username already exists");
        } else {
          if (newUsername != "" && password.value != "" && bio.value != "") {
            const newKey: string = newUsername;
            const newUser = {};
            newUser[newKey] = addUser;
            update(dbRef, newUser);
          }
        }
      });
    }
  });
/* let users: UserSign[] = [];
 */