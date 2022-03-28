import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";
import {
  Auth,
  connectAuthEmulator,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { async } from "@firebase/util";

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

const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:1234");

export class UserSign {
  public auth: Auth;
  /*   public username: string; */
  public email: string;
  public password: string;

  constructor(
    auth: Auth,
    /*     username: string, */
    email: string,
    password: string
  ) {
    this.auth = auth;
    /*     this.username = username; */
    this.email = email;
    this.password = password;
  }

  public async login(): Promise<void> {
    const loginWithEmailAndPassword = async () => {
      /*  const createNewUser = await signInWithEmailAndPassword( */

      const email = this.email.value;
      const pasword = this.password.value;
      /*     ); */
    };
    const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
    console.log(userCredential.user)
  }

}

/*  let registerBtn: HTMLElement = document.getElementById("register"); */

/* let username: HTMLElement = document.getElementById("username");
      let email: HTMLElement = document.getElementById("email");
      let password: HTMLElement = document.getElementById("password"); */
