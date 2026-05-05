document.getElementById("word").innerHTML = "Your gateway to the world of coding and technology. Join us to explore the latest trends, tutorials, and insights in the tech industry.";
document.getElementById("heading").innerHTML = "Welcome to hollywood tech services";
document.getElementById("services").innerHTML = "Our Services";
document.getElementById("contact").innerHTML = "Contact Us";
document.getElementById("email").innerHTML = "Email: riftkoders@example.com";
document.getElementById("btna").innerHTML = "switch theme";

document.getElementById("btna").addEventListener("click", function() {
    document.getElementById("new").innerHTML = "THIS IS ANEW TEXTS";

    const btn = document.getElementById("btna");
    if (btn.style.color === "blue") {
        btn.style.color = "black";
    } else {
        btn.style.color = "blue";
    }
});
