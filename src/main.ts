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
const dbRef = ref(db, "/users/userInfo/");

console.log("hello world");

document.getElementById("login").addEventListener("click", (e) => {
  e.preventDefault();

  const username: HTMLInputElement = document.querySelector("#username");
  const password: HTMLInputElement = document.querySelector("#password");

  console.log(username.value);
  /*   console.log(password.value); */

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/userInfo/${username.value}`)).then((snapshot) => {
    if (username.value == "" || password.value == "")
      console.log("fill in everything");
    else if (password.value == snapshot.val().password) {
      location.href = 'html/home.html';
    } else if (password.value != snapshot.val().password) {
      console.log("wrong password");
    } else if (snapshot.exists()) {
      console.log(snapshot.val(), "is a user");
    } else {
      console.log("This user does not exist");
    }
    sessionStorage.setItem("name",`${username.value}`);
    sessionStorage.setItem("gender",'male'/* `${gender.value}` */);

    
  });
});
let users: UserSign[] = [];

console.log(users);
console.log(dbRef);

/* new UserSign(); */




