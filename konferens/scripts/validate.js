var registrationForm;
var firstName;
var lastName;
var email;
var organization;
var lecture;
var seminar;
var discussion;
var messageage;
var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;



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
    let isValidEmail = pattern.test(email); 

    if (firstName == ""){
        alert("You need to fill in the field firstname")
        event.preventDefault();
    } else if (lastName == "") {
        alert("You need to fill in the field lastname")
        event.preventDefault();
    } else if (email == "") {
        alert("You need to fill in the field email")
        event.preventDefault();
    } else if (organization == "") {
        alert("You need to fill in the field organization")
        event.preventDefault();
    } else if (!isValidEmail)
    {
        alert("Email is not valid");
        event.preventDefault();
    }
    
    
}