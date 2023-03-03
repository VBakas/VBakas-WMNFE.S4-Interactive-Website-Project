/* Jason */

// Create a new XMLHttpRequest object
const req = new XMLHttpRequest();

// Set the request method and URL
req.open("GET", "./data/copyright.json");

// Set the response type to JSON
req.responseType = "json";

// Add an event listener to handle changes in the request state
req.addEventListener("readystatechange", () => {
  // Check if the request has completed
  if (req.readyState === XMLHttpRequest.DONE) {
    // Check if the response status is 200 (i.e. success)
    switch (req.status) {
      case 200:
        // Get the HTML element with the ID "copyj"
        const copyj = document.getElementById("copyj");

        // Loop through each copyright object in the response
        for (let copyright of req.response) {
          // Set the content of the "copyj" element to the current copyright object's "content" property
          copyj.innerHTML = `${copyright.content}`;
        }

        // End the switch statement
        break;

      // If the response status is not 200, log an error message to the console
      case 404:
        console.error("Not found");
    }
  }
});

// Send the request
req.send();
