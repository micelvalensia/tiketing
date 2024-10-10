const sidebar = document.querySelector(".profile");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    sidebar.classList.toggle("in");
});

window.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !burger.contains(event.target)) {
        sidebar.classList.remove("in");
    }
});
