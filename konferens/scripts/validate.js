var registrationForm;
var firstName;
var lastName;
var email;
var organization;
var selectedType;
var message;
var title
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
    message = registrationForm.field_message.value;
    title = registrationForm.field_pres_title.value;
    selectedType = registrationForm.pres_type.value;
    let isValidEmail = pattern.test(email); 

    if (firstName.length === 0){
        alert("Du måste fylla i ett förnamn")
        event.preventDefault();
        
    } else if (lastName.length === 0) {
        alert("Du måste fylla in ett efternamn")
        event.preventDefault();
    } else if (email.length === 0) {
        alert("Du måste fylla in email")
        event.preventDefault();
    } else if (organization.length === 0) {
        alert("Du måste fylla i organisation")
        event.preventDefault();
    } else if (!isValidEmail) {
        alert("Email är inte en giltig email");
        event.preventDefault();
    } else if (message.length > 200) {
        alert("Du har skrivit in ett förlångt meddelande");
        event.preventDefault();
    } else if (selectedType == "lecture"  || selectedType == "seminar" ) {
        if (title.length === 0) {
            alert("Titel måste fyllas i när du valt föreläsning eller semenarium");
            event.preventDefault();
        }
    }
}