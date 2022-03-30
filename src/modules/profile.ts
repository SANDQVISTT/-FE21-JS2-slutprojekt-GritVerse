import { db } from "./firebaseApp";
import { onValue, ref, get } from "firebase/database";

/* const dbReff = ref(db, '/users/userInfo');
 onValue(dbReff, snapshot=>{
    const data = snapshot.val();
    console.log(data)

 }) */

// const edizRef = ref(db, '/users/userInfo/edzone')
// get(edizRef).then(snapshot => {
    
//     console.log(snapshot.val());
// })
//Hämtar användernamn och kön ifrån Main.ts och sätter ut på profil-sidan
let usernameID = sessionStorage.getItem("user");
let genderID = sessionStorage.getItem("gender");
let bioID = sessionStorage.getItem("bio");

console.log(usernameID, genderID, bioID)

const namn:HTMLElement = document.querySelector('#UsernameID')
const gender: HTMLElement = document.querySelector('#genderID');
const bio: HTMLElement = document.querySelector('#bioID');
bio.innerText = bioID;
gender.innerText = genderID;
namn.innerText = usernameID;






