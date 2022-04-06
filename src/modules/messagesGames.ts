import { ref, remove, update, onValue, push } from "firebase/database";
import { db } from "./firebaseApp";
import { logOut } from "./logout";

export class Messages
{
  constructor(
    public readonly id: string,
    public readonly userName: string,
    public readonly message: string,
    public readonly timeStamp: string
  )
  {
    this.displayMsg();
  }
  private displayMsg(): void
  {
    //The div containing all message-divs
    const msgWrapper = document.getElementById("messagesGames");
    //The Div containing one message
    const msgContainer = document.createElement("div") as HTMLDivElement;
    msgWrapper.append(msgContainer);
    //Set the messages ID to the div containing the message
    msgContainer.classList.add(this.id, "chat-styling");

    //Create the userName h4 element
    const userNameElement = document.createElement("h4") as HTMLHeadElement;
    //Set the userName and the timeStamp
    userNameElement.innerText = this.timeStamp + `${this.userName} says ${this.message}`;
    msgContainer.append(userNameElement);

    //Create the remove button
    const removeBtn = document.createElement("button") as HTMLButtonElement;
    removeBtn.innerText = "X";
    //If the logged-in user is the same as message-user; append the remove-button
    if (this.userName == sessionStorage.getItem("user"))
    {
      msgContainer.append(removeBtn);
    }

    //Remove button event
    removeBtn.addEventListener("click", () =>
    {
      const userName = sessionStorage.getItem("user");
      //Check if the logged in user is the same as the user that posted the message
      if (userName == sessionStorage.getItem("user"))
      {
        //Set the reference to the post in the database & remove it
        const msgRef = ref(db, "/Topics/Games/" + this.id);
        remove(msgRef);
      }
    });
  }
  public clearDOM(): void
  {
    document.querySelector(`.${this.id}`).remove();
  }
}
//Reference to the current topic in the database
const dbRef = ref(db, "/Topics/Games/");
let messages: Messages[] = [];
onValue(dbRef, (snapshot) =>
{
  const messageData = snapshot.val();
  for (const message of messages)
  {
    message.clearDOM();
  }
  messages = [];
  //Send all the message data(key) to the database
  for (const key in messageData)
  {
    messages.push(
      new Messages(
        key,
        messageData[ key ].name,
        messageData[ key ].message,
        messageData[ key ].timeStamp
      )
    );
  }
  //Scroll to the bottom
  scrollDown();
  //Remove the 26th post
  function postLimiter(): void
  {
    const messageArray = Object.values(messageData);
    const index0 = Object.keys(messageData)[ 0 ];
    for (let i = 0; i < messageArray.length; i++)
    {
      if (messageArray.length > 25)
      {
        //Set the reference to the post in the database & remove it
        const post = ref(db, "/Topics/games/" + index0);
        remove(post);
      }
    }
  }
  //Check if theres too many posts
  if (messageData)
  {
    postLimiter();
  }
});
//If theres no logged in user, hide the "send-button"
if (sessionStorage.getItem("user") == null || undefined || "")
{
  document.getElementById("send").style.visibility = "hidden";
}
else
{
  //Otherwise, make the button visible
  document.getElementById("send").style.visibility = "visible";
  document.getElementById("send").addEventListener("click", (e) =>
  {
    e.preventDefault();
    const message = document.getElementById("userMessage") as HTMLInputElement;
    //Set the current timestamp
    const date = new Date();
    const messageToAdd = {
      timeStamp:
        date.getFullYear() +
        " " +
        (date.getMonth() + 1) +
        "/" +
        date.getUTCDate() +
        " - " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ": ",
      //Get  the logged-in user
      name: sessionStorage.getItem("user"),
      message: message.value,
    };

    const newKey: string = push(dbRef).key;
    const newMessage = {};
    newMessage[ newKey ] = messageToAdd;
    //Update the database with the message data
    update(dbRef, newMessage);
  });
}
function scrollDown(): void
{
  const e = document.getElementById("messagesGames");
  e.scrollTop = e.scrollHeight;
}
logOut();