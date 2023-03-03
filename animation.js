// Animation-News

// Create a new instance of IntersectionObserver with a callback function that adds a "show" class to elements when they intersect with the viewport
const observer = new IntersectionObserver((entries) => {
  // Loop through each entry in the array of IntersectionObserverEntry objects
  entries.forEach((entry) => {
    // Check if the element is intersecting with the viewport
    if (entry.isIntersecting) {
      // Add a "show" class to the element's classList if it is intersecting with the viewport
      entry.target.classList.add("show");

      // Commented out code that removes the "show" class if the element is not intersecting with the viewport
      // This could be uncommented if we want the effect to be repeated as the user scrolls back up and then back down to the element.

      // } else {
      //   entry.target.classList.remove("show");
      // }
    }
  });
});

// Select all elements with class name "hiddenl"
const hiddenElementsl = document.querySelectorAll(".hiddenl");

// Loop through all elements with class name "hiddenl" and call the Intersection Observer instance's "observe()" method with each element as its argument
hiddenElementsl.forEach((el) => observer.observe(el));

// Select all elements with class name "hiddenr"
const hiddenElementsr = document.querySelectorAll(".hiddenr");

// Loop through all elements with class name "hiddenr" and call the Intersection Observer instance's "observe()" method with each element as its argument
hiddenElementsr.forEach((el) => observer.observe(el));
