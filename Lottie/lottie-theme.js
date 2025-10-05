// === Lottie анімації ===
const lottieDay = lottie.loadAnimation({
    container: document.getElementById("lottie-day"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "Lottie_BG_Day.json"
});

const lottieNight = lottie.loadAnimation({
    container: document.getElementById("lottie-night"),
    renderer: "svg",
    loop: true,
    autoplay: true, // треба, щоб одразу крутилась
    path: "Lottie_BG_Night.json"
});

// стартує одразу, але невидима (opacity = 0)


// === Theme Button ===
const themeToggleAnim = lottie.loadAnimation({
    container: document.getElementById("theme-toggle"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Day-To-Night.json"
});

// === Menu Button ===
const menuButtonAnim = lottie.loadAnimation({
    container: document.getElementById("menu-button"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Menu-Button.json"
});

// === Sidebar BG ===
const sidebarBg = lottie.loadAnimation({
    container: document.getElementById("sidebar-bg"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "SideBar-BG.json"
});

// === Логіка теми ===
let isDark = false;

document.getElementById("theme-toggle").addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
        document.body.classList.replace("light-theme", "dark-theme");

        themeToggleAnim.setDirection(1);
        themeToggleAnim.play();

        // Плавний перехід: день → ніч
        document.getElementById("lottie-day").style.opacity = 0;
        document.getElementById("lottie-night").style.opacity = 1;

    } else {
        document.body.classList.replace("dark-theme", "light-theme");

        themeToggleAnim.setDirection(-1);
        themeToggleAnim.play();

        // Плавний перехід: ніч → день
        document.getElementById("lottie-night").style.opacity = 0;
        document.getElementById("lottie-day").style.opacity = 1;
    }
});

// === Логіка Sidebar ===
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
let sidebarOpen = false;

function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");

    menuButtonAnim.setDirection(-1);
    menuButtonAnim.play();

    sidebarBg.stop();
    sidebarOpen = false;
}

document.getElementById("menu-button").addEventListener("click", () => {
    sidebarOpen = !sidebarOpen;

    if (sidebarOpen) {
        sidebar.classList.add("open");
        overlay.classList.add("active");

        menuButtonAnim.setDirection(1);
        menuButtonAnim.play();

        sidebarBg.play();
    } else {
        closeSidebar();
    }
});

// Клік поза sidebar → закриває
overlay.addEventListener("click", closeSidebar);


