import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

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

export class UserSign {
  public username: string;
  public password: boolean;
  constructor(username: string, password: boolean) {
    this.username = username;
    this.password = password;
  }

  public createUser(email: string, username: string, password: boolean): void {
    const db = getDatabase();
    set(ref(db, "/users/userInfo" + this.username), {
      username: this.username,
      password: this.password,
    });
    console.log(this.createUser(this.username, "", this.password));
  }
}
