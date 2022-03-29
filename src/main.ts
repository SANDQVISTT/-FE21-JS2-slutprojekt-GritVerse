// import { DisplayToDom } from "./modules/display";
import { onValue, ref, update, push, remove } from "firebase/database";
import { db } from "./modules/firebaseApp";
import { Messages } from "./modules/messages";

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
// new DisplayToDom().createElements();