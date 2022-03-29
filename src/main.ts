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
import { Messages } from "./modules/messages";

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
  });
});
const dbRef = ref (db, "/Topics/Games/");
let messages:Messages[] = [];

onValue(dbRef, (snapshot) =>
    {
        const messageData = snapshot.val();
        for(const message of messages)
        {
            message.clearDOM();
        }
        messages = [];
        for (const key in messageData)
        {
            messages.push(new Messages(
                key, messageData[key].name,
                messageData[key].message,
                messageData[key].timeStamp
            ))
        }
        //Scroll to the bottom
        scrollDown();
        //Remove the 26th post
        function postLimiter():void
        {
            const messageArray = Object.values(messageData);
            const index0 = Object.keys(messageData)[0];
            for(let i = 0; i < messageArray.length; i++)
            {
                if(messageArray.length>25)
                {
                    //Set the reference in the database
                    //TODO: change reference with all 3 topics
                    const post = ref(db, "/Topics/games/" + index0);
                    remove(post);
                }
            }
        }
       if (messageData)
       {
        postLimiter();
       }
    });
document.getElementById("send").addEventListener("click", (e) =>
    {
        e.preventDefault();
        const name = document.getElementById("userName") as HTMLInputElement;
        const message = document.getElementById("userMessage") as HTMLInputElement;
        
        const messageToAdd = 
        {
            name: name.value,
            message: message.value,
        }
        
        const newKey:string = push(dbRef).key;
        const newMessage = {};
        newMessage[newKey] = messageToAdd;
        
        update(dbRef, newMessage);
    });
    
function scrollDown():void
{
    const e = document.getElementById("messages");
    e.scrollTop = e.scrollHeight;
};
let users: UserSign[] = [];

console.log(users);
console.log(dbRef);

/* new UserSign(); */