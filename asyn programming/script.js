// script.js

// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Initial countdown value
let countdownValue = 10;

// Function to update the countdown display
const updateCountdown = (seconds) => {
    countdownElement.textContent = seconds;
};

// Function to display the final message
const displayMessage = (message) => {
    countdownElement.textContent = message;
};

// Start the countdown using callback hell
setTimeout(() => {
    updateCountdown(countdownValue--); // 10
    setTimeout(() => {
        updateCountdown(countdownValue--); // 9
        setTimeout(() => {
            updateCountdown(countdownValue--); // 8
            setTimeout(() => {
                updateCountdown(countdownValue--); // 7
                setTimeout(() => {
                    updateCountdown(countdownValue--); // 6
                    setTimeout(() => {
                        updateCountdown(countdownValue--); // 5
                        setTimeout(() => {
                            updateCountdown(countdownValue--); // 4
                            setTimeout(() => {
                                updateCountdown(countdownValue--); // 3
                                setTimeout(() => {
                                    updateCountdown(countdownValue--); // 2
                                    setTimeout(() => {
                                        updateCountdown(countdownValue--); // 1
                                        setTimeout(() => {
                                            displayMessage("Happy Independence Day!"); // 0 and show message
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
