var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var starttime;

// START BUTTON
startBtn.addEventListener('click', function () {
    if (starttime === undefined) {
        starttime = setInterval(timer, 1000);
    } else {
        alert('Timer is already running');
    }
});

// STOP BUTTON
stopBtn.addEventListener('click', function () {
    clearInterval(starttime);
    starttime = undefined;
});

// RESET BUTTON
resetBtn.addEventListener('click', function () {
    clearInterval(starttime);
    starttime = undefined;

    wm.innerText = 20;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById('counter').innerText = 0;
});

function timer() {
    // WORK TIMER
    if (+ws.innerText !== 0) {
        ws.innerText--;
    } else if (+wm.innerText !== 0 && +ws.innerText === 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    // BREAK TIMER
    if (+wm.innerText === 0 && +ws.innerText === 0) {
        if (+bs.innerText !== 0) {
            bs.innerText--;
        } else if (+bm.innerText !== 0 && +bs.innerText === 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    // FULL CYCLE COMPLETED
    if (+wm.innerText === 0 && +ws.innerText === 0 &&
        +bm.innerText === 0 && +bs.innerText === 0) {

        wm.innerText = 20;
        ws.innerText = "00";
        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}
