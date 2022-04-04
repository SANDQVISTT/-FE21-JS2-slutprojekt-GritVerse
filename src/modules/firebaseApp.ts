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
  public pic: HTMLInputElement;
  constructor(username?: HTMLInputElement, password?: HTMLInputElement) {
    this.username = username;
    this.password = password;
  }
  /* Checks if user exists in database, if not it creates new user and uses session storage and redirects user to her/his profile */
  public createUser(): void {
    document
      .getElementById("register-user-to-site")
      .addEventListener("click", (e) => {
        e.preventDefault;

        this.username = document.querySelector("#username");
        this.password = document.querySelector("#password");
        const bio: HTMLInputElement = document.querySelector("#bio");
        const radio: NodeListOf<HTMLInputElement> =
          document.querySelectorAll(".form-radio");
        let img: string;

        radio.forEach((key: HTMLInputElement): void => {
          if (key.checked) {
            img = key.value;
          }
        });

        const newUsername: string = this.username.value.toLowerCase();
        const profilePic: string = img.valueOf();
        console.log("få fram pic", profilePic);

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
            profilePic: (
              document.querySelector(".form-radio") as HTMLInputElement
            ).value,
          };

          get(child(dbRef, `/${newUsername}`)).then((snapshot) => {
            console.log(snapshot.val(), snapshot.exists());
            if (snapshot.exists()) {
              display.alreadyUser();
            } else {
              if (
                newUsername != "" &&
                this.password.value != "" &&
                bio.value != "" &&
                profilePic
              ) {
                const newKey: string = newUsername;
                const newUser = {};
                newUser[newKey] = addUser;
                update(dbRef, newUser);
                sessionStorage.setItem("user", `${addUser.username}`);
                sessionStorage.setItem("gender", `${addUser.gender}`);
                sessionStorage.setItem("bio", `${addUser.bio}`);
                sessionStorage.setItem("pic", `${addUser.profilePic}`);
                window.location.href = "html/profile.html";
              }
            }
          });
        }
      });
  }
  /* Checks with database if user exits or not, if not it'll prompt error messages. If user exists and the password is true, it'll use session storage and redirect the user to the home page */
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
          if (snapshot.exists()) {
            if (this.username.value == "" || this.password.value == "") {
              display.fillInEveryBlock();
            } else if (this.password.value != snapshot.val().password) {
              display.wrongUserOrPassword();
            } else if (this.password.value == snapshot.val().password) {
              window.location.href = "html/home.html";
            }
            sessionStorage.setItem("user", `${snapshot.val().username}`);
            sessionStorage.setItem("gender", `${snapshot.val().gender}`);
            sessionStorage.setItem("bio", `${snapshot.val().bio}`);
          } else {
            display.wrongUserOrPassword();
          }
        }
      );
    });
  }
}
