// Initializing Mins and Secs

let mins;
let secs;

// Get Elements
let minsEle = document.getElementById("mins");
let secEle = document.getElementById("sec");
let btnStart = document.getElementById("start-timer");
let btnStop = document.getElementById("stop-timer");
let btnSetTimer = document.getElementById("set-timer");

// Creating inputs
let inputEleForMins = document.createElement("input");
let inputEleForSec = document.createElement("input");

// Adding event in Buttons
btnStart.addEventListener("mouseup", startTimer);
btnStop.addEventListener("mouseup", stopTimer);
btnSetTimer.addEventListener("mouseup", setTimer);

// Converting Time into seconds
let totalTimeInSeconds;

// For Clear Interval
let interval;

// default Values
// Disabliling Start and Stop Btn

btnStart.disabled = true;
btnStart.style.opacity = '0.6';

btnStop.disabled = true;
btnStop.style.opacity = '0.6';


// Function for countdown
function countdown() {

    totalTimeInSeconds--;

    // Converting Total Time Which is in sec to repesentative mins and sec
    mins = Math.floor(totalTimeInSeconds / 60);
    secs = totalTimeInSeconds % 60;

    // Condition when min and sec is less than 10 then concat '0'
    minsEle.innerHTML = mins < 10 ? '0' + mins : mins;
    secEle.innerHTML = secs < 10 ? '0' + secs : secs;

    if (totalTimeInSeconds === 0) {
        clearInterval(interval);

        // Styling On Button
        btnStart.disabled = false;
        btnStart.style.opacity = '1';
    }
}

// Function for start timer
function startTimer() {
    mins = Number(inputEleForMins.value);
    secs = Number(inputEleForSec.value);

    // Converting Time into seconds
    totalTimeInSeconds = mins < 1 ? + secs : (mins * 60) + secs;

    if (totalTimeInSeconds === 0 || (mins === NaN && secs === NaN)) {
        alert('Please set the time first');
    }

    else {
        // Disabiling start button
        btnStart.disabled = true;
        btnStart.style.opacity = '0.6';

        // turning disability off
        btnStop.disabled = false;
        btnStop.style.opacity = '1';

        interval = setInterval(countdown, 1000);
    }
}

// Function for stop timer
function stopTimer() {

    clearInterval(interval);

    // // Styling On Button
    // btnStart.disabled = false;
    // btnStart.style.opacity = '1';

    // Disabiling stop button
    btnStop.disabled = true;
    btnStop.style.opacity = '0.6';

    // turning disability off
    btnSetTimer.disabled = false;
    btnStop.style.opacity = '1';
}

// Function for set timer
function setTimer() {
    inputEleForMins.setAttribute("maxlength", 2);
    inputEleForSec.setAttribute("maxlength", 2);

    inputEleForMins.value = "";
    inputEleForSec.value = "";
    minsEle.innerHTML = "";
    secEle.innerHTML = "";

    minsEle.appendChild(inputEleForMins);
    secEle.appendChild(inputEleForSec);

    // Turning Disability Off
    btnStart.disabled = false;
    btnStart.style.opacity = '1';

    btnStop.disabled = false;
    btnStop.style.opacity = '1';
    
    // Disabliling Set Timer Button
    btnSetTimer.disabled = true;
    btnStop.style.opacity = '0.3';
}