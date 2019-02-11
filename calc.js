
console.log('INFO: Starting to read case.js');

console.log('INFO: Getting access to elements');

const radiusElement = document.getElementById("radius");
const heightElement = document.getElementById("height");
const btnElement = document.getElementById("calcbtn");
const answerElement = document.getElementById("answerText");

console.log('INFO: Configuring event handlers');

btnElement.onClick = calcVolume();

console.log('INFO: Declaring functions');

function calcVolume() {
    const radius = radiusElement.value;
    const height = heightElement.value;
    const volume = 3.14 * radius * radius * height;
    answerElement.innerHTML = `The volume is: ${volume} cubic centimeters.`
}

console.log('INFO: Done loading, waiting for an event'); 