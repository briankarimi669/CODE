document.addEventListener('DOMContentLoaded', () => {
    const ticket = document.getElementById('ticket');

    // Add a subtle click effect
    ticket.addEventListener('mousedown', () => {
        ticket.style.transform = "scale(0.95)";
    });

    ticket.addEventListener('mouseup', () => {
        ticket.style.transform = "scale(1.02)";
        console.log("Enjoy FAHM Festival, Benjamin!");
    });
});
document.getElementById('click')