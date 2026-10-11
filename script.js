function startStory() {
    showSection("memories");
}

function showSection(sectionId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(sectionId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
        window.scrollTo(0, 0);
    }
}

function showFinalMessage() {
    document.getElementById("final-message").classList.remove("hidden");
}
