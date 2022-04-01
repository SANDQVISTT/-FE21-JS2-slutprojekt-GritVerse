import { ref, get } from "firebase/database";
import { db } from "./firebaseApp";

const GameRef = ref(db, '/Topics/Games/');
const MusicRef = ref(db, '/Topics/Music/');
const ShowRef = ref(db, '/Topics/Shows/');

get(GameRef).then((snapshot) => {
    console.log(snapshot.val());
    const messages = Object.values(snapshot.val());
    const gameTopic: HTMLElement = document.querySelector('#gameMessage')
    const gameTopicUsername: HTMLElement = document.querySelector('#gameTopicUsername')
    gameTopic.innerText = messages[messages.length - 1].message;
    gameTopicUsername.innerText = messages[messages.length - 1].name;
})
get(MusicRef).then((snapshot) => {
    console.log(snapshot.val());
    const messages = Object.values(snapshot.val());
    const musicTopic: HTMLElement = document.querySelector('#musicMessage')
    const musicTopicName: HTMLElement = document.querySelector('#MusicUsername')
    musicTopicName.innerText = messages[messages.length - 1].name;
    musicTopic.innerText = messages[messages.length - 1].message;
})
get(ShowRef).then((snapshot) => {
    console.log(snapshot.val());
    const messages = Object.values(snapshot.val());
    const showsTopic: HTMLElement = document.querySelector('#showsMessage')
    const ShowsUsername: HTMLElement = document.querySelector('#ShowsUsername')
    ShowsUsername.innerText = messages[messages.length - 1].name;
    showsTopic.innerText = messages[messages.length - 1].message;})


document.getElementById("logout-button").addEventListener("click", ()=>
{
    sessionStorage.clear();
});