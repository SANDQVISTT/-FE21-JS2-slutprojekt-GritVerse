import { getAuth } from 'firebase/auth';
import { UserSign } from './modules/firebaseApp';
import { DisplayToDom } from "./modules/display";

new UserSign(getAuth(), 'test@test.com', 'test123').login()

/* new DisplayToDom().createElements(); */

console.log("hello world");
