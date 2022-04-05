import { ref,get, DataSnapshot} from "firebase/database";
import { db } from "./firebaseApp";
import { logOut } from "./logout";
import { deleteProfile } from "./deleteUser";


(()=>{
    let usernameID = sessionStorage.getItem("user");
    let target = sessionStorage.getItem("targetUser");
    let test =  target === null ? usernameID: target
    
    
    console.log(test)
    
const dbRef = ref(db,`/users/userInfo/${test.toLowerCase()}`)
get(dbRef).then((snapshot:DataSnapshot)=>{
    if(snapshot.exists()){
        const {username,bio,gender,profilePic}= snapshot.val()
        console.log(snapshot.val())
        const img: HTMLInputElement = document.querySelector('#ProfileP')
        img.src = profilePic;
        
        const namn: HTMLElement = document.querySelector("#UsernameID");
        const genders: HTMLElement = document.querySelector("#genderID");
        const bios: HTMLElement = document.querySelector("#bioID");
        
        bios.innerText = bio;
        genders.innerText = gender;
        namn.innerText = username;
       sessionStorage.removeItem("targetUser")
    }
})

})();

deleteProfile();
logOut();