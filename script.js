const error = document.querySelector("span.error");
const email = document.getElementById("email");
const form = document.querySelector("form");

// Regular Expression for the user email
const regExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Here is the test for the validation of the email since the input element is not required;
window.addEventListener("load", () => {
  //Check if the input field is empty, if it not wetext that is corresponds with the regExp
  const validEmail = email.value.length === 0 || regExp.test(email.value);
  email.className = validEmail ? "valid" : "invalid";
});

// This defines what happens when the user inputs an email
email.addEventListener("input", () => {
  const validEmail = email.value.length === 0 || regExp.test(email.value);

  if (validEmail) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
    email.style.border = "1px solid hsl(234, 29%, 20%)";
  } else {
    error.className = "invalid";
    email.style.border = "1px solid hsl(4, 100%, 67%)";
  }
});

// This defines what happens when the user tries to submit the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form default action on submission

  //  This checkes if the email input is empty
  if (email.value === "") {
    // if it is it displays this text
    error.textContent = "Field is required";
    email.style.border = "1px solid hsl(4, 100%, 67%)";
  } else if (email.value !== "") {
    // if it is not it checkes it the email is valid following the reguar expression
    if (regExp.test(email.value)) {
      // if it satisfies the regular expression it goes to the success page
      window.location.href = "./success.html";

      // This gets the user email and saves it in a local storage.
      const userEmail = email.value;
      window.localStorage.setItem("user-email", userEmail);
    } else {
      // if not it displays an error message
      error.textContent = "Valid email required";
      email.style.color = "hsl(4, 100%, 67%)";
      email.style.backgroundColor = "hsla(4, 100%, 67%, 0.289)";
      email.style.border = "1px solid hsl(4, 100%, 67%)";
    }
  } else {
    return;
  }
});

// This code saves the user email in a local storage to be displayed in the success page
