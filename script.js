// script.js

// Sample credentials for demonstration
const validUsername = "omtusharkant"; // replace with your valid username
const validPassword = "password"; // replace with your valid password

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect to another page or perform any action
        window.location.href = "homepage.html"; // Example redirect
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
