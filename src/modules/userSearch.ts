import { ref } from "firebase/database";
import { db } from "./firebaseApp";

const dbRef = ref(db, "/users/userInfo/");

document.getElementById("userSelect").onclick = function ()
{
    let values = [];
    values.push(dbRef);
    let userNames = ref(db, "/users/userInfo/".search("username").toString()) //Get users from the database

    for (const val of values)
    {
        let userSelect = document.getElementById("userSelect");
        let option = document.createElement("option");
        option.value = val;
        // option.text = val.charAt(0).toUpperCase() + values.slice(1);
        // option.text = userNames.toString();
        userSelect.appendChild(option);
    }
}
let userSelect = document.getElementById("userSelect");