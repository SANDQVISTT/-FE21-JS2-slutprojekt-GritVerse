export class DisplayToDom {
  public hideRegisterElements(): void {
    const dropdown: HTMLElement = document.querySelector("#gender-choice");
    dropdown.style.display = "none";
    const textarea: HTMLElement = document.querySelector("#user-bio");
    textarea.style.display = "none";
    const registerBtn: HTMLElement = document.querySelector("#register-user");
    registerBtn.style.display = "none";
  }
  public fillInEveryBlock(): void {
    const inputError: HTMLElement = document.getElementById("gritverse-title");
    inputError.innerText = "Please fill in every input...";
  }

  public wrongUserOrPassword(): void {
    const wrongPw: HTMLElement = document.getElementById("gritverse-title");
    wrongPw.innerText = "Wrong username or password, try again...";
  }
  public doesntExist(): void {
    const noUser: HTMLElement = document.getElementById("gritverse-title");
    noUser.innerText = "User doesn't exist.";
  }
  public alreadyUser(): void {
    const alreadyAnUser: HTMLElement =
      document.getElementById("gritverse-title");
    alreadyAnUser.innerText =
      "This username is already taken. Try another one.";
  }

  public hideAndShowLoginPage(): void {
    document.getElementById("register").addEventListener("click", (e) => {
      e.preventDefault();
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

      document.getElementById("return").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dropdown: HTMLElement = document.querySelector("#gender-choice");
        const textarea: HTMLElement = document.querySelector("#user-bio");
        const loginTitle: HTMLElement = document.getElementById("login-title");
        const passwordTitle: HTMLElement =
          document.getElementById("password-title");
        const registerBtn: HTMLElement =
          document.querySelector("#register-user");
        const login: HTMLElement = document.querySelector("#login");
        const alreadyAccount: HTMLElement = document.getElementById("register");

        dropdown.style.display = "none";
        textarea.style.display = "none";
        loginTitle.innerText = "Log in";
        passwordTitle.style.display = "none";
        registerBtn.style.display = "none";
        login.style.display = "revert";
        alreadyAccount.style.display = "center";
        alreadyAccount.innerHTML =
          'No account? <a id="return" href="">Register here</a>';

        console.log("in return");
      });
    });
  }
}
