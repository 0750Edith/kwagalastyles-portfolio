// ===============================
// DARK / LIGHT MODE
// ===============================
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);

    try {
        localStorage.setItem("theme", next);
    } catch (e) {}
});


// ===============================
// MOBILE MENU
// ===============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar")) {
        closeMenu();
    }
});


// ===============================
// WHATSAPP LINKS FOR EACH SERVICE
// ===============================
const WHATSAPP_NUMBER = "256777704252";

document.querySelectorAll(".service-link").forEach(function (link) {
    const service = link.getAttribute("data-service");
    const message = "Hello Kwagala Styles, I would like to book: " + service + ".";

    link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
});


// ===============================
// SCROLL PROGRESS BAR
// ===============================
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", function () {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? (window.scrollY / height) * 100 : 0;

    progressBar.style.width = percent + "%";
});


// ===============================
// HIGHLIGHT ACTIVE NAV LINK
// ===============================
const sections = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                menuLinks.forEach(function (link) {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + entry.target.id
                    );
                });
            }
        });
    },
    { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach(function (section) {
    sectionObserver.observe(section);
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});
// ===============================
// AUTOPLAY GALLERY VIDEOS WHEN VISIBLE
// ===============================
const galleryVideos = document.querySelectorAll(".gallery-item video");

const galleryVideoObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.play().catch(function () {});
            } else {
                entry.target.pause();
            }
        });
    },
    { threshold: 0.3 }
);

galleryVideos.forEach(function (video) {
    video.muted = true;
    galleryVideoObserver.observe(video);
});
// ===============================
// BACK TO TOP BUTTON
// ===============================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    backToTop.classList.toggle("visible", window.scrollY > 500);
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});