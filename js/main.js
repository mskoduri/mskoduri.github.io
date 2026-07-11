// Navbar background on scroll
window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        nav.style.background = "rgba(0,0,0,.7)";
    } else {
        nav.style.background = "rgba(255,255,255,.15)";
    }

});

// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Mobile Menu
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}

// Handle page load / browser back
window.addEventListener("pageshow", function (event) {

    const section = sessionStorage.getItem("returnSection");

    if (section) {
        setTimeout(() => {
            scrollToSection(section);
            sessionStorage.removeItem("returnSection");
        }, 100);
        return;
    }

    // Scroll to top only on fresh page load
    const navigation = performance.getEntriesByType("navigation")[0];

    if (!(event.persisted || (navigation && navigation.type === "back_forward"))) {
        window.scrollTo(0, 0);
    }

});