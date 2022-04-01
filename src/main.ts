import { UserSign } from "./modules/firebaseApp";
import { DisplayToDom } from "./modules/display";

const users = new UserSign();
const display = new DisplayToDom();

users.logIn();
users.createUser();
display.hideAndShowLoginPage();