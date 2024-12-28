// script.js

// Password stored directly in the script (this is where you specify your password)
const correctPassword = "EMMYHENZ"; // Change this to your desired password

// Function to ask for the password
function promptForPassword() {
    // Prompt the user to enter a password
    let userPassword = prompt("Please enter the password to continue:");

    // Check if the entered password is correct
    if (userPassword === correctPassword) {
        console.log("Password correct. You can stay on the page.");
        stayForTwoMinutes();  // Start the timer if the password is correct
    } else {
        console.log("Incorrect password. Closing the page.");
        alert("Incorrect password! The page will close now.");
        window.close(); // Close the page if the password is incorrect
    }
}

// Function to keep the page running for 2 minutes (only if the password is correct)
function stayForTwoMinutes() {
    console.log("Page will stay open for 2 minutes...");

    // After 120 seconds (2 minutes), close the page
    setTimeout(function() {
        console.log("2 minutes are up. Closing the page...");
        window.close(); // This closes the window/tab
    }, 120000); // 120000 milliseconds = 2 minutes
}

// Run the password check as soon as the page loads
window.onload = function() {
    promptForPassword(); // Ask for the password when the page loads
};
