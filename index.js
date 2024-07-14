let startTime, updatedTime, difference, tInterval;
let running = false;
let lapCounter = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        running = true;
        startStopBtn.innerText = 'Pause';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.innerText = 'Start';
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerText = 'Start';
    display.innerText = '00:00:00.000';
    lapCounter = 0;
    laps.innerHTML = '';
}

function lapStopwatch() {
    if (running) {
        lapCounter++;
        const li = document.createElement('li');
        li.innerText = `Lap ${lapCounter}: ${display.innerText}`;
        laps.appendChild(li);
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds < 10) ? '00' + milliseconds : (milliseconds < 100) ? '0' + milliseconds : milliseconds;

    display.innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', lapStopwatch);
