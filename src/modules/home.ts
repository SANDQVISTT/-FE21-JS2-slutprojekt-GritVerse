import { getDatabase, ref,child,get } from "firebase/database";
import { db } from "./firebaseApp";




 const GameRef = ref(db, '/Topics/Games/');
 const MusicRef = ref(db, '/Topics/Music/');
 const ShowRef = ref(db, '/Topics/Shows/');

get(GameRef).then((snapshot) => {
    console.log(snapshot.val());

    const messages = Object.values(snapshot.val());
    console.log(messages[messages.length-1].message);

    
    const gameTopic:HTMLElement = document.querySelector('#gameMessage')
    gameTopic.innerText = messages[messages.length-1].message;
    
})
get(MusicRef).then((snapshot) => {
    console.log(snapshot.val());

    const messages = Object.values(snapshot.val());
    console.log(messages[messages.length-1].message);

    
    const musicTopic:HTMLElement = document.querySelector('#musicMessage')
    musicTopic.innerText = messages[messages.length-1].message;
    
})
get(ShowRef).then((snapshot) => {
    console.log(snapshot.val());

    const messages = Object.values(snapshot.val());
    console.log(messages[messages.length-1].message);

    
    const showsTopic:HTMLElement = document.querySelector('#showsMessage')
    showsTopic.innerText = messages[messages.length-1].message;
    
})


