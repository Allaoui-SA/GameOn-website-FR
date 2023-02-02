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
const modalClose = document.querySelectorAll(".close-modal");
const submitBtn = document.querySelector(".btn-submit");
const errorMsg = document.querySelector(".error-message")

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const terms = document.getElementById("checkbox1");

const errorFirstname = document.getElementById('error-firstname')
const errorLastname = document.getElementById('error-lastname')
const errorEmail = document.getElementById('error-email')
const errorBirthdate = document.getElementById('error-birthdate')
const errorTerms = document.getElementById('error-terms')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((element) => element.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
function validate() {
  let form = document.querySelector('form')
  form.submit()
}

//regex test minimum length
const minLength = /^[a-zA-Z]{2,}$/;
//regex test email valid syntax
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//display error messages
submitBtn.addEventListener("click", function(e) {
  //prevent the submit validation
  e.preventDefault()
  //if the firstname length is less than 2
  if (!first.value.match(minLength)) {
    first.style = "border:2px solid #FE142F"
    errorFirstname.innerHTML = "* Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  }
  //if the lastname string length is less than 2
  else if (!last.value.match(minLength)) {
    first.style = "border:none"
    errorFirstname.innerHTML = ""
    last.style = "border:2px solid #FE142F"
    errorLastname.innerHTML = "* Veuillez entrer 2 caractères ou plus pour le champ du nom."
  }
  //if the email syntax is not valid
  else if (!email.value.match(validEmail)) {
    first.style = last.style = "border:none"
    errorFirstname.innerHTML = errorLastname.innerHTML = ""
    email.style = "border:2px solid #FE142F"
    errorEmail.innerHTML = "* Veuillez saisir une adresse e-mail valide."
  }
  //if there is no date selected
  else if (!date.value) {
    first.style = last.style = email.style = "border:none"
    errorFirstname.innerHTML = errorLastname.innerHTML = errorEmail.innerHTML = ""
    date.style = "border:2px solid #FE142F"
    errorBirthdate.innerHTML = "* Vous devez entrer votre date de naissance."
  }
  //if the terms are not checked
  else if (!terms.checked) {
    errorTerms.innerHTML = "* Vous devez vérifier que vous acceptez les termes et conditions."
  }
  //if there is no value selected 
  else if (!quantity.value) {
    first.style = last.style = email.style = date.style = "border:none"
    errorFirstname.innerHTML = errorLastname.innerHTML = errorEmail.innerHTML = errorBirthdate.innerHTML = ""
    quantity.value = 0
    let sent = document.querySelector('.confirmation-container')
    sent.style = "z-index:2;opacity:1;"
    return true;
  }
  //if everything is ok
  else{
    let sent = document.querySelector('.confirmation-container')
    sent.style = "z-index:2;opacity:1;"
    return true;
  }
})

