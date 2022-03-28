const timer = {
    pomadoro: 25,
    shortBreak: 5,
    longBreak: 15,
    intervalLongBreak: 4
}
const modeButtons = document.querySelector('#js-mode-buttons')
modeButtons.addEventListener('click', handleMode)
function handleMode(event) {
    const { mode } = event.target.dataset

    if(!mode) return;

    switchMode(mode)
}

function switchMode(mode) {
    timer.mode = mode
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0
    }
}
console.log(timer)