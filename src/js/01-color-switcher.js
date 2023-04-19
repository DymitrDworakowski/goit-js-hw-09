const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
const paddedHexNumber = Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
return `#${paddedHexNumber}`;
}
let timerId = null;
startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
    document.body.style.backgroundColor =color;
}, 1000);
});

stopBtn.addEventListener("click", () => {
clearInterval(timerId);
console.log(`Interval has stopped!`);
});

