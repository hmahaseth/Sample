/*!
 * Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
 */
// Highlights current date on contact page
window.addEventListener("DOMContentLoaded", (event) => {
  const listHoursArray = document.body.querySelectorAll(".list-hours li");
  listHoursArray[new Date().getDay()].classList.add("today");
});
// Get all the video elements on the page
var videos = document.getElementsByTagName("myvideo");

// Define a function to pause all videos except the one that is playing
function pauseOthers() {
  // Loop through all the videos
  for (var i = 0; i < myvideo.length; i++) {
    // If the video is not the one that triggered the event, pause it
    if (myvideo[i] != event.target) {
      myvideo[i].pause();
    }
  }
}

// Add an event listener to each video element for the play event
for (var i = 0; i < myvideo.length; i++) {
  myvideo[i].addEventListener("play", pauseOthers);
}
