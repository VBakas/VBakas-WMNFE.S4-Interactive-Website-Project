/* Test Load More */

// Get all elements with class name "grid-item" and store them in an array called "container"
let container = document.querySelectorAll(".grid-item");

// Get the element with class name "load-more"
let loadMore = document.querySelector(".load-more");

// Set the initial number of images to load to 20
let imagecount = 20;

// Add a click event listener to the "load-more" button
loadMore.addEventListener("click", function () {
  // Loop through the "container" array starting from the current "imagecount" index
  // and display the next 20 elements if they exist
  for (var i = imagecount; i < imagecount + 20; i++) {
    if (container[i]) {
      container[i].style.display = "block";
    }
  }

  // Increment the "imagecount" variable by 20 to set the starting index for the next load of images
  imagecount += 20;

  // If all the images have been loaded, hide the "load-more" button
  if (imagecount >= container.length) {
    loadMore.style.display = "none";
  }
});
