var mainInput = document.getElementById("main-input");
var five = document.getElementById('five%');
var ten = document.getElementById('ten%');
var fifteen = document.getElementById("fift%");
var twentyfive = document.getElementById('tfive%');
var fifty = document.getElementById("fifty%");
var custom = document.getElementById('custom');
var mainInput2 = document.getElementById('numP');
var singleResult = document.getElementById('single-result');
var totalResult = document.getElementById("total-result");
var reset = document.getElementById('reset');

var fivePercentHold = parseFloat(mainInput.value) * 0.05;
var tenPercentHold = parseFloat(mainInput.value) * 0.1;
var fifteenPercentHold = parseFloat(mainInput.value) * 0.15;
var twentyfivePercentHold = parseFloat(mainInput.value) * 0.25;
var fiftyPercentHold = parseFloat(mainInput.value) * 0.5;
var customPercentHold = parseFloat(mainInput.value) * parseFloat(custom.value);

var numPerson = parseInt(mainInput2.value);

five.addEventListener('click', function() {
    fivePercentHold = parseFloat(mainInput.value) * 0.05;
    singleResult.textContent = "$" + fivePercentHold.toFixed(2);
})

ten.addEventListener('click', function() {
    tenPercentHold = parseFloat(mainInput.value) * 0.1;
    singleResult.textContent = "$" + tenPercentHold.toFixed(2);
})

fifteen.addEventListener('click', function() {
    fifteenPercentHold = parseFloat(mainInput.value) * 0.15;
    singleResult.textContent = "$" + fifteenPercentHold.toFixed(2);
})

twentyfive.addEventListener('click', function() {
    twentyfivePercentHold = parseFloat(mainInput.value) * 0.25;
    singleResult.textContent = "$" + twentyfivePercentHold.toFixed(2);
})

fifty.addEventListener('click', function() {
    fiftyPercentHold = parseFloat(mainInput.value) * 0.5;
    singleResult.textContent = "$" + fifteenPercentHold.toFixed(2);
})

custom.addEventListener('input', updateCustom);
function updateCustom(e) {
    customPercentHold = parseFloat(mainInput.value) * parseFloat(custom.value)/100;
    singleResult.textContent = "$" + customPercentHold.toFixed(2);
}

mainInput2.addEventListener('input', updateNumP);
function updateNumP(e) {
    totalResult.textContent = "$" + (parseInt(mainInput2.value) * parseFloat((singleResult.textContent).replace("$", ''))).toFixed(2);
}

reset.addEventListener('click', function () {
    mainInput.value = '';
    mainInput2.value = '';
    custom.value = '';
    singleResult.textContent = '';
    totalResult.textContent = '';
    // reset.style.backgroundColor = 'hsl(183, 100%, 15%)';
})