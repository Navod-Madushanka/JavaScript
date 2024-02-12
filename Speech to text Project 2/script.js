const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const speechBtnDiv = document.querySelector('#search-btn');
const micBtn = document.querySelector('.btn .fas');
const instruction = document.querySelector('.instruction');

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Ckeck for Browser Support
if (speechRecognition) {
    // console.log("Speech Recognition Supported");

    const recognotion = new speechRecognition();

    micBtn.addEventListener("click", micBtnClicked);

    function micBtnClicked(e) {
        e.preventDefault();

        if (micBtn.classList.contains("fa-microphone")) {
            recognotion.start();
        } else {
            recognotion.stop();
        }

    }

    // Start speech Recognition
    recognotion.addEventListener("start", () => {
        micBtn.classList.remove("fa-microphone");
        micBtn.classList.add("fa-microphone-slash");
        instruction.textContent = "Recoding.... Press control + b to stop";
        searchInput.focus();
        console.log("Speech Recognition Started");
    });

    // stop speech Recognition
    recognotion.addEventListener("end", () => {
        micBtn.classList.remove("fa-microphone-slash");
        micBtn.classList.add("fa-microphone");
        instruction.textContent = "Press control + X or click the mic icone to start";
        searchInput.focus();
        console.log("Speech Recognition end");
    });

    // Get Result of speech Recognition

    recognotion.continuous = true;

    // let content = "";

    recognotion.addEventListener("result", (e) => {
        // console.log(e);
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;

        if (transcript.toLowerCase().trim() === "stop recording") {
            recognotion.stop();
        } else if (!searchInput.value) {
            searchInput.value = transcript;
        } else {
            const toLowAndTrim = transcript.toLowerCase().trim();
            if (toLowAndTrim === "search") {
                searchForm.submit();
            } else if (toLowAndTrim === "reset form") {
                searchInput.value = "";
            } else {
                searchInput.value = transcript;
            }
        }

    });

    // Add Keyboard Event Listner
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "x") {
            recognotion.start();
        } else if (e.ctrlKey && e.key === "b") {
            recognotion.stop();
        }
    });

    // Handle errors
    recognotion.addEventListener('error', (e) => {
        console.log(`Speech recognition error: ${e.error}`);
    });

} else {
    console.log("Speech Recognition Not Supported");
    speechBtnDiv.style.visibility = "hidden";
}