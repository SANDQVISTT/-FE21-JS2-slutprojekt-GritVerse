import { UserSign } from "./modules/firebaseApp";
import { DisplayToDom } from "./modules/display";

/* Calling the different functions */
const users = new UserSign();
const display = new DisplayToDom();
users.logIn();
users.createUser();
display.hideAndShowLoginPage();
