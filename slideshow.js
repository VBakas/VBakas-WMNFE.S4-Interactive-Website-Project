/* Slideshow */

let images = document.querySelectorAll("#image-gallery img");
let thumbnails = document.querySelectorAll("#thumbnail-gallery img");
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
let currentImage = 0;
let slideInterval;

// This function takes an argument n and changes the current image and thumbnail to the corresponding index n
function changeImage(n) {
  // hide the current image
  images[currentImage].style.display = "none";
  // remove active class from the current thumbnail
  thumbnails[currentImage].classList.remove("active");
  // set the current image to the new index
  currentImage = (n + images.length) % images.length;
  // show the new image
  images[currentImage].style.display = "block";
  // add active class to the new thumbnail
  thumbnails[currentImage].classList.add("active");
}

// This function will clear the interval and call the changeImage function with the next image index
function nextSlide() {
  changeImage(currentImage + 1);
}

// This function will clear the interval and call the changeImage function with the previous image index
function prevSlide() {
  changeImage(currentImage - 1);
}

// This function sets an interval to call the nextSlide function every slideDuration seconds
function playSlideshow(slideDuration) {
  changeImage(currentImage);
  slideInterval = setInterval(nextSlide, slideDuration * 2000);
}

// This function will clear the interval and stop the slideshow
function stopSlideshow() {
  clearInterval(slideInterval);
}

// This will call the changeImage function with the starting index of 0 to display the first image and thumbnail
changeImage(0);

// Start the slideshow on page load and change slides every 2 seconds by default
playSlideshow(2);

// Add an event listener to the "Play" button to start the slideshow with the user-specified slide duration
playButton.addEventListener("click", function () {
  let slideDuration = parseFloat(document.getElementById("time-input").value);
  if (!isNaN(slideDuration)) {
    stopSlideshow();
    playSlideshow(slideDuration);
  }
});

// Add an event listener to the "Stop" button to stop the slideshow
stopButton.addEventListener("click", stopSlideshow);
