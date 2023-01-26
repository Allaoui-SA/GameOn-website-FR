function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const errorMsg = document.querySelector(".error-message")

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const terms = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// messages d'erreur
const errorFirstname = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
const errorLastname = "Veuillez entrer 2 caractères ou plus pour le champ du nom."

//regex test minimum length
const minLength = /^[a-zA-Z]{2,}$/;
//regex test email valid syntax
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//display error messages
submitBtn.addEventListener("click", function(e) {
  
  //if the firstname length is less than 2
  if (!first.value.match(minLength)) {
    //prevent the submit validation
    e.preventDefault()
    errorMsg.innerHTML = "* Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  }
  //if the lastname string length is less than 2
  else if (!last.value.match(minLength)) {
    e.preventDefault()
    errorMsg.innerHTML = "* Veuillez entrer 2 caractères ou plus pour le champ du nom."
  }
  //if the email syntax is not valid
  else if (!email.value.match(validEmail)) {
    e.preventDefault()
    errorMsg.innerHTML = "* Veuillez saisir une adresse e-mail valide."
  }
  //if there is no date selected
  else if (!date.value) {
    e.preventDefault()
    errorMsg.innerHTML = "* Vous devez entrer votre date de naissance."
  }
  //if the terms are not checked
  else if (!terms.checked) {
    errorMsg.innerHTML = "* Vous devez vérifier que vous acceptez les termes et conditions."
  }
  //if there is no value selected 
  else if (!quantity.value) {
    quantity.value = 0
  }
  //if everything is ok
  else{
    errorMsg.innerHTML = ""
    //restore the submit validation
    return true;
  }
})

