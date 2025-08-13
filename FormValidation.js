let formData = document.querySelector(".form");
let submitBtn = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldsMessages = document.querySelectorAll(".empty-field");
let showPwdButton = document.querySelector(".btn");

let firstName, lastName, email, password;
let fnTarget, LnTarget, emailTarget, pwdTarget;
let fnflag, Lnflag, emailflag, pwdflag;
let field;

//RegEx => Regular Expression
let nameRegEx = /^[a-z]+$/i; //name should contain these values.
let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  //Email should contain these values.
let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; //Password should contain these values.


//Handling error-messages.
for(let errorMsg of errorMessages){
  errorMsg.classList.add("no-error"); //"no-error" is from CSS. 
}

for(let field of emptyFieldsMessages){
  field.classList.add("no-error");   //"no-error" is from CSS.
}

//handling input fields
formData.addEventListener("keyup", (event) => { // event "keyup" => Bcz it's input field.
  event.preventDefault(); //this prevents re-fresh the webpage.
  field = event.target.dataset.key; // this event delegation, gives data-key which has been defined in input field in HTML.
  switch (field) {
    case "firstName":
      firstName = event.target.value; // this gives input values.
      fnTarget = event.target;        // this gives name* of the input field.
      break;
    case "lastName":
      lastName = event.target.value;
      LnTarget = event.target;
      break;
    case "email":
      email = event.target.value;
      emailTarget = event.target;
      break;
    case "password":
      password = event.target.value;
      pwdTarget = event.target;
      break;
    default:
        firstName = lastName = email = password = "";
      break;
  }
});

//Create Account button
submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);

    //Showing First Name error messages.
    if (firstName) {
      emptyFieldsMessages[0].classList.add("no-error");   //Actually .add => hides error msg.
      if (!nameRegEx.test(firstName)) {
        fnTarget.classList.add("error");                  // "error" is from CSS. .add => shows RedColor border.
        errorMessages[0].classList.remove("no-error");    //Actually .remove => shows error msg.
        fnflag = false;
      } else {
        fnflag=true;
        fnTarget.classList.remove("error");               // "error" is from CSS. .remove => Hide RedColor border.
        errorMessages[0].classList.add("no-error");
      }
    } else {
      emptyFieldsMessages[0].classList.remove("no-error");
    }
    
    //Showing Last Name error messages.
    if (lastName) {
      emptyFieldsMessages[1].classList.add("no-error");
      if (!nameRegEx.test(lastName)) {
        Lnflag=false;
        LnTarget.classList.add("error");
        errorMessages[1].classList.remove("no-error");
      } else {
        Lnflag=true;
        LnTarget.classList.remove("error");
        errorMessages[1].classList.add("no-error");
      }
    } else {
      emptyFieldsMessages[1].classList.remove("no-error");
    }
    
    //Showing Email error messages.
    if (email) {
      emptyFieldsMessages[2].classList.add("no-error");
      if (!emailRegEx.test(email)) {
        emailflag=false;
        emailTarget.classList.add("error")
        errorMessages[2].classList.remove("no-error");
      } else {
        emailflag=true;
        emailTarget.classList.remove("error")
        errorMessages[2].classList.add("no-error");
      }
    } else {
      emptyFieldsMessages[2].classList.remove("no-error");
    }

    //Showing Password error messages.
    if (password) {
      emptyFieldsMessages[3].classList.add("no-error");
      if (!passwordRegEx.test(password)) {
        pwdflag=false;
        pwdTarget.classList.add("error");
        errorMessages[3].classList.remove("no-error");
      } else {
        pwdflag=true;
        pwdTarget.classList.remove("error");
        errorMessages[3].classList.add("no-error");
      }
    } else {
      emptyFieldsMessages[3].classList.remove("no-error");
    }

    //RE-locating to success Login page.
    if (fnflag && Lnflag && emailflag && pwdflag) {
      fnTarget.value = LnTarget.value = emailTarget.value = pwdTarget.value = ""; // once Login, all the values in field, will be empty.
      window.location.href = "./success.html";      
    }
});

//password visibility
showPwdButton.addEventListener("click", (event) =>{
  event.preventDefault();
  if (pwdTarget.getAttribute("type") === "text") {
    pwdTarget.setAttribute("type", "password");    
  }else{
    pwdTarget.setAttribute("type" , "text");
  }
});