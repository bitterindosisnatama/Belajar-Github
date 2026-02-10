const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbarDynamic");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbar.classList.toggle("scale-in-hor-left");

    if (navbar.style.transform === "scaleX(1)") {
        navbar.style.transform = "scaleX(0)";
    } else {
        navbar.style.transform = "scaleX(1)";
    }
});
