// script.js

// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Initial countdown value
let countdownValue = 10;

(function countdown() {
    countdownElement.textContent = countdownValue--;
    if (countdownValue >= 0) {
        setTimeout(countdown, 1000);
    } else {
        countdownElement.textContent = "Happy Independence Day!";
    }
})();
