/* Contact Form */

// This function displays an error message for a given form element (specified by its id)
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
  }
  
  // This function validates the form fields
  function validateForm() {
    // Get the values of the form fields
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var emailcom = document.Form.emailcom.value;
    var mobile = document.Form.mobile.value;
    var address = document.Form.address.value;
  
    // Set all the error flags to true initially
    var nameErr = (emailErr = emailcomErr = mobileErr = addressErr = true);
  
    // Validate the name field
    if (name == "") {
      // Display an error message if the field is empty
      printError("nameErr", "Please enter your full name");
      // Add a CSS class to highlight the input field with the error
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      // Define a regular expression to validate the name format
      var regexname =
        /^(?!\s)(?!.*\s\s)(?:[a-zA-Z]+[\.',-]?)+\s(?:[a-zA-Z]+[\.',-]?)+$/;
      if (regexname.test(name.trim()) === false) {
        // Display an error message if the name format is invalid
        printError("nameErr", "Please enter a valid name");
        // Add a CSS class to highlight the input field with the error
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
      } else {
        // Clear the error message and set the error flag to false
        printError("nameErr", "");
        nameErr = false;
        // Remove the CSS class to remove the highlight from the input field
        var elem = document.getElementById("name");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
      }
    }
  
    // Validate the email field
  if (email == "") {
    printError("emailErr", "Please enter your email address");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    // Use a regular expression to validate the email format
    var regexemail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (regexemail.test(email.trim()) === false) {
      printError("emailErr", "Please enter a valid email address");
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      // If the email is valid, clear the error message and set the error flag to false
      printError("emailErr", "");
      emailEr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
  
  f (emailcom == "") {
    // If the email confirmation field is empty, display an error message
    printError("emailComErr", "Please confirm your email address");
    var elem = document.getElementById("emailcom");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    // If the email confirmation field is not empty, check if it matches the email address entered
    if (email.trim() !== emailcom) {
      // If the email confirmation does not match, display an error message
      printError("emailComErr", "Emails do not match");
      var elem = document.getElementById("emailcom");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      // If the email confirmation matches, clear the error message and update the emailComErr flag
      printError("emailComErr", "");
      emailComErr = false;
      var elem = document.getElementById("emailcom");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }


        // Check if mobile number is empty
if (mobile == "") {
    // Display error message for mobile number
    printError("mobileErr", "Please enter your mobile number");
    // Add CSS class "input-2" and remove "input-1" from mobile input field
    var elem = document.getElementById("mobile");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    // Check if mobile number is valid using regular expression
    var regexmob = /^[0-9]{10}$/;
    if (regexmob.test(mobile.trim()) === false) {
      // Display error message for mobile number
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
      // Add CSS class "input-2" and remove "input-1" from mobile input field
      var elem = document.getElementById("mobile");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      // Clear error message for mobile number
      printError("mobileErr", "");
      // Set mobileErr to false to indicate no error
      mobileErr = false;
      // Add CSS class "input-1" and remove "input-2" from mobile input field
      var elem = document.getElementById("mobile");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
  
  // Check if address is empty
  if (address == "") {
    // Display error message for address
    printError("addressErr", "Please enter your address");
    // Add CSS class "input-2" and remove "input-1" from address input field
    var elem = document.getElementById("address");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    // Check if address is valid using regular expression
    var regexadd = /^[A-Za-z\s]+\s[0-9,-]+,[\s]*[0-9]{5}\s[A-Za-z\s]+$/;
    if (regexadd.test(address.trim()) === false) {
      // Display error message for address
      printError("addressErr", "Please enter a valid address");
      // Add CSS class "input-2" and remove "input-1" from address input field
      var elem = document.getElementById("addressErr");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      // Clear error message for address
      printError("addressErr", "");
      // Set addressErr to false to indicate no error
      addressErr = false;
      // Add CSS class "input-1" and remove "input-2" from address input field
      var elem = document.getElementById("address");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
  
  // Check if any error variable is true
  if ((nameErr || emailErr || emailComErr || mobileErr || addressErr) == true) {
    // If there is any error, return false to prevent form submission
    return false;
  }