const wordArray = ["Singer", "Pop singer", "Song writer"];
const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

function type() {
    if (!cursor.classList.contains("typing")) {
        cursor.classList.add("typing");
    }

    if (letterIndex < wordArray[wordArrayIndex].length) {
        typedWord.textContent += wordArray[wordArrayIndex][letterIndex];
        letterIndex++;
        requestAnimationFrame(type);
    } else {
        cursor.classList.remove("typing");
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if (!cursor.classList.contains("typing")) {
        cursor.classList.add("typing");
    }

    if (letterIndex > 0) {
        typedWord.textContent = wordArray[wordArrayIndex].substring(0, --letterIndex);
        requestAnimationFrame(erase);
    } else {
        wordArrayIndex = (wordArrayIndex + 1) % wordArray.length;
        cursor.classList.remove("typing");
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newWordDelay);
});