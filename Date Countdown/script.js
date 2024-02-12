const countTo = "1 Aug 2024";

const c = setInterval(() => {
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const countdown = document.getElementById("countdown");
    countdown.textContent = `${days}Days ${format(hours)}Hrs : ${format(minutes)}Min ${format(seconds)}s`;

    if (totalSeconds < 0) {
        clearInterval(c);
        countdown.textContent = "Exam Day";
    }

}, 1000);

function format(t) {
    return t < 10 ? `0${t}` : t;
}