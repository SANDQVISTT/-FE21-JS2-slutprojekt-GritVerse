import { db } from "./firebaseApp";
import { onValue, ref, get } from "firebase/database";
import { logOut } from "./logout";

let usernameID = sessionStorage.getItem("user");
let genderID = sessionStorage.getItem("gender");
let bioID = sessionStorage.getItem("bio");
let picID = sessionStorage.getItem("profilePIC");

console.log(picID, "testar att få bildens URL");

//
const namn: HTMLElement = document.querySelector("#UsernameID");
const gender: HTMLElement = document.querySelector("#genderID");
const bio: HTMLElement = document.querySelector("#bioID");
//
bio.innerText = bioID;
gender.innerText = genderID;
namn.innerText = usernameID;

logOut();