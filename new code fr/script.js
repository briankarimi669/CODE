document.getElementById("word").innerHTML="Your gateway to the world of coding and technology. Join us to explore the latest trends, tutorials, and insights in the tech industry."
document.getElementById("heading").innerHTML="Welcome to hollywood tech services"
document.getElementById("services").innerHTML="Our Services"
document.getElementById("contact").innerHTML="Contact Us"
document.getElementById("email").innerHTML="Email: riftkoders@example.com"
document.getElementById("btna").innerHTML="switch theme"

document.getElementById("btna").addEventListener("click", function() {
    const text = document.getElementById("new").innerHTML="THIS IS ANEW TEXTS";
})
document.getElementById("btna").addEventListener("click", function() {
    const color = document.getElementById("btna").style.color="black";
    if(document.getElementById("btna").style.color === "black"){
        document.getElementById("btna").style.color="blue";
    }
    else{
        document.getElementById("btna").style.color="black";
    }
})