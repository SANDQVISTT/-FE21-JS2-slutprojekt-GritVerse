import { ref, get } from "firebase/database";
import { db } from "./firebaseApp";
import { logOut } from "./logout";

const GameRef = ref(db, "/Topics/Games/");
const MusicRef = ref(db, "/Topics/Music/");
const ShowRef = ref(db, "/Topics/Shows/");

get(GameRef).then((snapshot) => {
  console.log(snapshot.val());
  const messages = Object.values(snapshot.val());
  const gameTopic: HTMLElement = document.querySelector("#gameMessage");
  const gameTopicUsername: HTMLElement =
    document.querySelector("#gameTopicUsername");
  gameTopic.innerText = messages[messages.length - 1].message;
  gameTopicUsername.innerText = messages[messages.length - 1].name;
});
get(MusicRef).then((snapshot) => {
  console.log(snapshot.val());
  const messages = Object.values(snapshot.val());
  const musicTopic: HTMLElement = document.querySelector("#musicMessage");
  const musicTopicName: HTMLElement = document.querySelector("#MusicUsername");
  musicTopicName.innerText = messages[messages.length - 1].name;
  musicTopic.innerText = messages[messages.length - 1].message;
});
get(ShowRef).then((snapshot) => {
  console.log(snapshot.val());
  const messages = Object.values(snapshot.val());
  const showsTopic: HTMLElement = document.querySelector("#showsMessage");
  const ShowsUsername: HTMLElement = document.querySelector("#ShowsUsername");
  ShowsUsername.innerText = messages[messages.length - 1].name;
  showsTopic.innerText = messages[messages.length - 1].message;
});

const profilRef = ref(db, "/users/userInfo");
get(profilRef).then((snapshot) => {
  console.log(snapshot.val());
  const users = Object.keys(snapshot.val());
  //const user: HTMLElement = document.querySelector("#showUsersP");
  console.log(users);
  // user.innerText = users[users.length-1].username ;
  for (const user of users) {
    console.log(user);
    const usersDIV: HTMLDivElement = document.createElement("div");
    document.body.append(usersDIV);
    let usernames: HTMLParagraphElement = document.createElement("p");
    usernames.innerText = user;

    usersDIV.appendChild(usernames);

    usernames.addEventListener("click", function (e) {
      sessionStorage.setItem("targetUser", usernames.textContent);
      window.location.href = "./profile.html";
    });
  }
});

logOut();
