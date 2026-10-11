// =====================================
// 1. PERSONAL APOLOGY LETTER
// =====================================

const apologyLetter = `Rana habibt albii,

Ana msh ayzk tz3aly mni wla tday'y mni m'darsh az3alek
wana kman oltlk z3alek dh andy eh w blnsbaly eh embarh
enty ah madghota w msh ahssan haga w wallahi wana kman el saraha nfseyan msh kwis khales

mhma kan ely hassal yrana ehna tol omrena bn'dar aleh maa baad
w bn3ady b kol haga ana msh hayygy w't w asebk wana oltlk dh abl keda
eni omry ma h3ml maaki keda wla hta asebk f ay haga yrana wla dlw wla b3den

wana 2alk dh yrana enty hob hayaty w hayaty kolaha
el kalam dh kber gdn arfa yaani eh dy haga kbera gdn enty bas meday'a w mzzargena 
wana gnbk bardu w hfdl tol omry gnbk msh hasebk ashan dh andy msh option assasn 
enty blnsbaly kol haga fel doinya w ahla haga kman fel doinya kolaha wenty arfa ana bahbk ad eh 

wla ana wla enty kwiseen enty arfa ana msh kwis mn eh w dh m'sar alya nfseyan bshkl kber
wenty kman msh kwisa el ayam dy bas ana bardu mask beki w bgd ba'y aleki f kol sanya w kol lahza
enty blnsbaly kol haga f hayaty w ana oltlk eni hsthmlk w f3ln b3ml keda w msh hstghna 3nk f youm mn el ayam
ana f3ln bahbk w bkhtark f kol mra w mn kol albi yrana ana mask feki hta wenty keda ashan hagat kter gdn

bas bardu roghm kol haga ana feha ana agy asalhk w a'olk ha'k alaya matz3lesh mni abadan
wana kman meday' mnk bas ana aref enk htradeni mot'aked 
mafish had hyygy yheb kol wahed fena bnfs el tare'a dy keda ana hayaty kolaha leki yrana
w msh htbaa lgherk abadan
ehna 3adena bly as3ab mn keda yrana msh hnegy ala el khafif dh w n3ml keda 
w dh asln blnsbalna msh haga yaani blnsba lely fat 
aref en kol dh yemkn trakomat mnk wana oltlk eni msh meday' w mesthml en dh tl3 3laya ana
wana mardy ashan howa mnk asln shayfa ana bahbk le anhy daraga 
wana msh hsmah eni aroh baad keda adawar aleki f had tani ana msh h3ml keda abadan 
wenty asln blnsbaly wallahi mat3rafy blnsbaly amla ezay wla ana hatek andy fen

BAHBK moutt bamouttt fekii b3sha'kkk dy olayela❤️`;


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
