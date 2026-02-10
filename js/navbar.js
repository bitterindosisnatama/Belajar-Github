const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbarDynamic");

let isOpen = false;

hamburger.addEventListener("click", () => {
    if (!isOpen) {
        navbar.classList.add("scale-in-hor-left");
        navbar.style.transform = "scaleX(1)";
        isOpen = true;
    } else {
        navbar.classList.remove("scale-in-hor-left");
        navbar.style.transform = "scaleX(0)";
        isOpen = false;
    }
});
