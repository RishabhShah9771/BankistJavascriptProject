import { labelTimer, labelWelcome, containerApp } from './domElements.js';

// Function to handle the logout timer
const logOutTimer = function () {
  // Function to update the timer display and handle logout
  const timeFunction = function () {
    // Calculate minutes and seconds from the remaining time
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    // Display the remaining time in the UI
    labelTimer.textContent = `${minutes}:${seconds}`;

    // When the time reaches 0, stop the timer and log out the user
    if (time === 0) {
      clearInterval(timer); // Stop the timer
      labelWelcome.textContent = 'Log in to get started'; // Update welcome message
      containerApp.style.opacity = 0; // Hide the application container
    }

    // Decrease the time by 1 second
    time--;
  };

  // Set initial time to 10 minutes (600 seconds)
  let time = 10 * 60;

  // Call the timeFunction immediately to display the initial time
  timeFunction();

  // Call the timeFunction every second to update the timer
  const timer = setInterval(timeFunction, 1000);

  return timer;
};

export default logOutTimer;
