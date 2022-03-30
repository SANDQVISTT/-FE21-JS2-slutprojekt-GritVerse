export class DisplayToDom {
  public hideRegisterElements(): void {
    const dropdown: HTMLElement = document.querySelector("#gender-choice");
    dropdown.style.display = "none";
    const textarea: HTMLElement = document.querySelector("#user-bio");
    textarea.style.display = "none";
    const registerBtn: HTMLElement = document.querySelector("#register-user");
    registerBtn.style.display = "none";
  }
  public createErrorMsg(): void {
    const inputError: HTMLElement = document.getElementById("gritverse-title");
    inputError.innerText = "Please fill in every input...";
  }

  public wrongPassword(): void {
    const wrongPw: HTMLElement = document.getElementById("gritverse-title");
    wrongPw.innerText = "Wrong username or password, try again...";
  }
  public doesntExist(): void {
    const noUser: HTMLElement = document.getElementById("gritverse-title");
    noUser.innerText = "Wrong username or password.";
  }

  public hideLoginPage(): void {
    console.log("in hide login page");
    const div: HTMLElement = document.getElementById("form-title-container");
    const loginTitle: HTMLElement = document.getElementById("login-title");
    const username: HTMLElement = document.getElementById("username");
    const passwordTitle: HTMLElement =
      document.getElementById("password-title");
    const dropdown: HTMLElement = document.querySelector("#gender-choice");
    const password: HTMLElement = document.getElementById("password");
    const login: HTMLElement = document.getElementById("login");
    const alreadyAccount: HTMLElement = document.getElementById("register");
    const textarea: HTMLElement = document.querySelector("#user-bio");
    const bioText: HTMLElement = document.querySelector("#bio-title");
    const registerBtn: HTMLElement = document.querySelector("#register-user");

    registerBtn.style.display = "center";

    /* const register = document.getElementById("register"); */
    loginTitle.style.display = "center";
    username.style.display = "center";
    password.style.display = "center";
    login.style.display = "none";
    dropdown.style.display = "block";
    textarea.style.display = "block";
    loginTitle.innerText = "Choose a username";
    passwordTitle.innerText = "Choose password";
    passwordTitle.style.color = "white";
    bioText.innerText = "Write something about yourself:";
    bioText.style.color = "white";
    registerBtn.style.display = "block";
    alreadyAccount.innerHTML =
      'Already have an account? <a id="return" href="">Click here</a>';
  }

  public showLoginPage(): void {
    const returnToLogin: HTMLElement = document.getElementById('return')
    returnToLogin.innerHTML = 'hej'

  }

  public registerPage(): void {}
  //   public div: HTMLDivElement;
  //   public createElements(): void {
  //     this.div = document.createElement("div");
  //     this.div.setAttribute("id", "main");
  //     document.body.append(this.div);

  //     const h1: HTMLHeadElement = document.createElement("h1");
  //     h1.setAttribute("id", "title");
  //     this.div.appendChild(h1);
  //     h1.innerText = "Hello! Typescript is working!";
  //     h1.style.textAlign = "center";
  //   }
}
