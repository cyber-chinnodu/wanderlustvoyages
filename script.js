document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");
});

// Simple form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}
function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    return true;
}