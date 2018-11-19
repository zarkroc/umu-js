var registrationForm;
var firstName;
var lastName;
var email;
var organization;
var lecture;
var seminar;
var discussion;
var messageage;


window.onload = function() {
    registrationForm = document.getElementById('registration_form');
    if (registrationForm.addEventListener) {
        registrationForm.addEventListener("submit", function (event) {validateForm(event)}, false); //For modern browsers
    } else if (registrationForm.attachEvent) {
        registrationForm.attachEvent('onsubmit', function (event) {validateForm(event)}); //For old browsers
    }
};


function validateForm(event) {
    firstName = registrationForm.field_firstname.value;
    lastName = registrationForm.field_lastname.value;
    email = registrationForm.field_email.value;
    organization = registrationForm.field_organisation.value;
    console.log(firstName);
    console.log(lastName);

    if (firstName == "" || lastName == "" || email == "" || organization == ""){
        alert("You need to fill in the fields")
        registrationForm.field_email.validi
        event.preventDefault();
    }
    
    
}