// script.js - Only what the assignment requires

// Function to update current time in milliseconds
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Display time immediately when page loads
updateTime();

// Update time every second (1000ms)
setInterval(updateTime, 1000);