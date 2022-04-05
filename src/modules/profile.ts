import { db } from "./firebaseApp";
import { onValue, ref, get } from "firebase/database";
import { logOut } from "./logout";
import { deleteProfile } from "./deleteUser";

let usernameID = sessionStorage.getItem("user");
let genderID = sessionStorage.getItem("gender");
let bioID = sessionStorage.getItem("bio");
let picID = sessionStorage.getItem("pic");

console.log(picID, "testar att få bildens URL");

const img:HTMLInputElement = document.querySelector('#ProfileP')
console.log(img)
img.src = picID;

const namn: HTMLElement = document.querySelector("#UsernameID");
const gender: HTMLElement = document.querySelector("#genderID");
const bio: HTMLElement = document.querySelector("#bioID");

bio.innerText = bioID;
gender.innerText = genderID;
namn.innerText = usernameID;

deleteProfile();
logOut();