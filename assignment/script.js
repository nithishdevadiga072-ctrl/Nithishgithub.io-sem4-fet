function showMessage() {
    // Ask user name
    let name = prompt("What is your name?");

    // Ask user interest
    let interest = prompt("What do you like to do?");

    // Show greeting message
    alert("Hello " + name + "! 😊");

    // Show interest message
    alert("That's awesome! I also like " + interest + "!");

    // Display on page
    document.getElementById("extra-info").innerText =
        "Nice to meet you, " + name + "! You enjoy " + interest + ".";
}
