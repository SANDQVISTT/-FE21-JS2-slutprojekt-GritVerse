import { initializeApp } from "firebase/app";
import { ref, update, get, child, getDatabase } from "firebase/database";
import { DisplayToDom } from "./display";

const firebaseConfig = {
  apiKey: "AIzaSyCTRAdceoTbtvNIW6CjcnSDwqsovjuM9aY",
  authDomain: "gritverse-15493.firebaseapp.com",
  databaseURL:
    "https://gritverse-15493-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gritverse-15493",
  storageBucket: "gritverse-15493.appspot.com",
  messagingSenderId: "567530223495",
  appId: "1:567530223495:web:aad5d730be1d87806f8522",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const dbRef = ref(db, "/users/userInfo/");
const display = new DisplayToDom();
export class UserSign {
  public username: HTMLInputElement;
  public password: HTMLInputElement;
  public gender: HTMLInputElement;
  public bio: HTMLInputElement;
  constructor(username?: HTMLInputElement, password?: HTMLInputElement) {
    this.username = username;
    this.password = password;
  }

  public createUser(): void {
    document
      .getElementById("register-user-to-site")
      .addEventListener("click", (e) => {
        e.preventDefault;

        this.username = document.querySelector("#username");
        this.password = document.querySelector("#password");
        const bio: HTMLInputElement = document.querySelector("#bio");

        const newUsername: string = this.username.value.toLowerCase();

        if (
          newUsername === "" ||
          this.password.value === "" ||
          bio.value === ""
        ) {
          display.fillInEveryBlock();
        } else {
          console.log("GENDER: ", document.querySelector("#gender"));
          const addUser = {
            username: (document.querySelector("#username") as HTMLInputElement)
              .value,
            password: (document.querySelector("#password") as HTMLInputElement)
              .value,
            gender: (document.querySelector("#gender") as HTMLInputElement)
              .value,
            bio: (document.querySelector("#bio") as HTMLInputElement).value,
          };

          get(child(dbRef, `/${newUsername}`)).then((snapshot) => {
            console.log(snapshot.val(), snapshot.exists());
            if (snapshot.exists()) {
              display.alreadyUser();
            } else {
              if (
                newUsername != "" &&
                this.password.value != "" &&
                bio.value != ""
              ) {
                const newKey: string = newUsername;
                const newUser = {};
                newUser[newKey] = addUser;
                update(dbRef, newUser);
              }
              location.href = "html/home.html";
            }
          });
        }
      });
  }

  public logIn(): void {
    document.getElementById("login").addEventListener("click", (e) => {
      e.preventDefault();

      this.username = document.querySelector("#username");
      this.password = document.querySelector("#password");
      this.gender = document.querySelector("#gender");
      this.bio = document.querySelector("#bio");

      console.log(this.username.value);
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/userInfo/${this.username.value}`)).then(
        (snapshot) => {
          if (this.username.value == "" || this.password.value == "") {
            display.fillInEveryBlock();
          } else if (this.password.value != snapshot.val().password) {
            display.wrongUserOrPassword();
          } else if (this.password.value != snapshot.val().password) {
            display.wrongUserOrPassword();
          } else if (this.password.value == snapshot.val().password) {
            location.href = "html/home.html";
          } else {
            console.log("wrong user or pw");
          }
          sessionStorage.setItem("user", `${snapshot.val().username}`);
          sessionStorage.setItem("gender", `${snapshot.val().gender}`);
          sessionStorage.setItem("bio", `${snapshot.val().bio}`);
        }
      );
    });
  }
}
