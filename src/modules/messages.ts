import { get, ref, remove, child, DataSnapshot } from "firebase/database";
import { db } from "./firebaseApp";
//OBS: REWORK IN PROGRESS, EYES TIRED
export class Messages
{
    id: string;
    msg: string;
    constructor(
        public readonly commentId: string,
        public readonly userId:string,
        public readonly userMsg:string,
        public readonly timeStamp:string
    )
    {
       this.printUserInfo(); 
    }
    public printUserInfo()
    {
        const userName:HTMLParagraphElement = document.createElement("p");
        userName.id = this.commentId;
        userName.innerText = this.timeStamp + `User name ${this.userId}, Message: ${this.userMsg}`;
        
        const removeBtn: HTMLButtonElement = document.createElement("button");
        removeBtn.setAttribute("value", this.commentId);
        removeBtn.innerText = "X";
        removeBtn.addEventListener("click", (e) =>
        {
            const test = <HTMLInputElement>document.getElementById("userNameInput");  //UNUSED ID
            
            get(child(ref(db), `userInfo/${this.commentId}`)).then(
                (snapshot: DataSnapshot):void =>
                {
                    if(snapshot.exists())
                    {
                        if (test.value == snapshot.val().userId)
                        {
                            const taskRef = ref(db, "/userInfo/" + this.commentId);
                            remove(taskRef);
                        }
                    }
                }
            );
        });
        const userInfo = <HTMLInputElement>document.getElementById("comment-Input");  //UNUSED ID, IN TESTING
        userInfo.append(removeBtn);
        
        const userDiv = <HTMLDivElement>document.getElementById("db-comments"); //UNUSED ID, IN TESTING
        userDiv.appendChild(userName);
    }
    public removeMessage():void
    {
        document.querySelector(`#${this.commentId}`).remove();
    }
    public removeDomeElement():void
    {
        document.querySelector(`#${this.id}`).remove();
    }
}