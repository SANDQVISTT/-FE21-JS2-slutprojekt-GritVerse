import { db } from "./firebaseApp";
import { onValue,ref } from "firebase/database";

const dbReff = ref(db, '/users/userInfo');
console.log(dbReff);

onValue(dbReff, snapshot=>{
    const data = snapshot.val();
    console.log(data);
    
})

export class Profile{
    //private readonly password:string

    constructor(
    public readonly userName: string,
    public readonly gender: string,
    public readonly bio:string,
    ){}

    
    
         public displayProfile():void{
           const name:HTMLElement = document.querySelector('#nameID');
           const gender:HTMLElement = document.querySelector('#genderID');
           const bio:HTMLElement = document.querySelector('#bioID');
            name.innerText = `${this.userName}`
            gender.innerText = `${this.gender}`;
            //bio.innerText = `${this.bio}`
            console.log(this.userName)
                
                name.append(name);
                gender.append(gender);
                bio.append(bio)
            }
            }
    

        /* onValue(dbReff, snapshot=>{
            const data = snapshot.val();
        for(const key in data){
            console.log(key, data[key].name);
            const name = document.createElement('h3');
            const gender = document.createElement('h3');
            const bio = document.createElement('h3'); */
        
        


        
            
            
       


          