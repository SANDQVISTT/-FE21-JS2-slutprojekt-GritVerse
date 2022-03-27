import { get, ref, remove, child, DataSnapshot } from "firebase/database";
import { db } from "./firebaseApp";
//OBS: REWORK IN PROGRESS, EYES TIRED

export class Messages
{
    constructor(
    public readonly id: string,
    public readonly userName: string,
    public readonly message: string,
    public readonly timeStamp:string
    )
    {
        this.displayMsg();
    }
    private displayMsg():void
    {
        //The section containing all messages (section for each topic?)
        const msgWrapper = document.getElementById("messages");
        //The Div containing one message
        const msgContainer = document.createElement("div") as HTMLDivElement;
        msgWrapper.append(msgContainer);
        //Set the messages ID to the div containing the message
        msgContainer.id = this.id;
        
        //Create the userName h4 element
        const userNameElement = document.createElement("h4") as HTMLHeadElement;
        //Set the userName and the timeStamp
        userNameElement.innerText = this.timeStamp + `User name ${this.id}`;
        msgContainer.append(userNameElement);
        
        //Create the remove button
        const removeBtn = document.createElement("button") as HTMLButtonElement;
        removeBtn.innerText = "X";
        msgWrapper.append(removeBtn);
        
        //Removebuttons event
        removeBtn.addEventListener("click", () =>
        {
            const userName = document.getElementById("userNameInput") as HTMLInputElement;
            
            if (this.userName == userName.value)
            {
                //Set the reference in the database
                //TODO: change topics later
                const msgRef = ref(db, "/Topics/Games/" + this.id);
                remove(msgRef);
                
            }
        });
    };
    public clearDOM():void
    {
        document.querySelector(`${this.id}`).remove();
    }
}