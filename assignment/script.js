<div class="container">
        <img src="https://via.placeholder.com/150" alt="Profile Picture" class="profile-img">
        
        <h1 id="name">Hello, I'm Nithish Devadiga</h1>
        <p class="bio">
            I am a web developer passionate about creating simple and beautiful websites.
        </p>

        <button onclick="showMessage()">Click to Know More</button>

        <p id="extra-info"></p>
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
