const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".brand-card");

searchInput.addEventListener("keyup", () => {
    const search = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(search)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        document
        .querySelector(".filter-btn.active")
        .classList.remove("active");

        button.classList.add("active");

        const category = button.dataset.category;

        cards.forEach(card => {

            if(
                category === "all" ||
                card.dataset.category === category
            ){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });
    });
});