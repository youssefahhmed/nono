// =====================================
// 1. PERSONAL APOLOGY LETTER
// =====================================

const apologyLetter = `My love,

I've been thinking about what happened,
and I don't want to pretend that everything is okay
when I know that I hurt you.

I'm sorry for my part in what happened.
Your feelings matter to me, and I never want you
to feel like they don't.

I know that saying sorry isn't enough on its own.
I want to listen to you, understand how you feel,
and show you through my actions that I'm willing
to do better.

I'm not making this little website because I expect
everything to be fixed with a few words.
I'm making it because you mean so much to me,
and I wanted to do something from my heart.

You deserve love, honesty, patience, and respect.
And I want to keep learning how to give you that.

I'm sorry. ❤️`;


// =====================================
// 2. NAVIGATION BETWEEN CHAPTERS
// =====================================

function startStory() {
    showSection("memories");
}

function showSection(sectionId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(sectionId);

    if (!selectedScreen) {
        console.error("Section not found:", sectionId);
        return;
    }

    selectedScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (sectionId === "letter") {
        typeLetter();
    }
}


// =====================================
// 3. TYPE THE LETTER CHARACTER BY CHARACTER
// =====================================

let typingStarted = false;

function typeLetter() {
    if (typingStarted) return;

    typingStarted = true;

    const letterElement = document.getElementById("letter-text");
    const nextButton = document.getElementById("letter-button");

    if (!letterElement || !nextButton) {
        console.error("Letter elements not found.");
        return;
    }

    let index = 0;

    letterElement.textContent = "";
    nextButton.classList.add("hidden");

    function typeNextCharacter() {
        if (index < apologyLetter.length) {
            const character = apologyLetter.charAt(index);

            letterElement.textContent += character;
            index++;

            const delay = character === "\n" ? 180 : 28;

            setTimeout(typeNextCharacter, delay);
        } else {
            nextButton.classList.remove("hidden");
        }
    }

    typeNextCharacter();
}


// =====================================
// 4. FINAL MESSAGE
// =====================================

function showFinalMessage() {
    const message = document.getElementById("final-message");

    if (!message) {
        console.error("Final message element not found.");
        return;
    }

    message.classList.remove("hidden");

    createHeartBurst();

    setTimeout(function() {
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
}


// =====================================
// 5. FLOATING HEARTS IN THE BACKGROUND
// =====================================

function createFloatingHeart() {
    const container = document.getElementById("hearts-container");

    if (!container) return;

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 20) + "px";

    const duration = 7 + Math.random() * 7;

    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, duration * 1000);
}


// =====================================
// 6. HEART BURST WHEN SHE CLICKS LET'S TALK
// =====================================

function createHeartBurst() {
    const container = document.getElementById("hearts-container");

    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.classList.add("floating-heart");

        heart.textContent = "♥";

        heart.style.left = (10 + Math.random() * 80) + "vw";

        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        const duration = 3 + Math.random() * 4;

        heart.style.animationDuration = duration + "s";

        container.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, duration * 1000);
    }
}


// =====================================
// 7. START THE HEART ANIMATION
// =====================================

setInterval(createFloatingHeart, 650);
