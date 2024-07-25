const confirmMail = document.getElementById("confirmationMail");


// This code retrives the user email from the local storage
const userMail = window.localStorage.getItem("user-email");

// Display the user email on the success page
confirmMail.textContent = userMail;


