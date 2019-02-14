
console.log('INFO: Starting to read calc.js');

console.log('INFO: Getting access to elements');

const radiusElement = document.getElementById("radius");
const heightElement = document.getElementById("height");
const btnElement = document.getElementById("calcbtn");
const answerElement = document.getElementById("answerText");

const radius = radiusElement.value;
const height = heightElement.value;
console.log("radius", radius);

/* local storage part
window.localStorage.setItem('radius', radiusElement);
window.localStorage.setItem('height', heightElement);

JSON.parse(window.localStorage.getItem('user'));*/

console.log('INFO: Configuring event handlers');

btnElement.addEventListener("click", function(){calcVolume2(radius,height)});

console.log('INFO: Declaring functions');

/*
function calcVolume() {
    const radius = radiusElement.value;
    const height = heightElement.value;
    const volume = 3.14 * radius * radius * height;
    answerElement.innerHTML = `The volume is: ${volume} cubic centimeters.`
}*/

function calcVolume2(r,h){
    const volume = 3.14 * r * r * h;
    answerElement.innerHTML = `The volume is: ${volume} cubic centimeters.`
}

console.log('INFO: Done loading, waiting for an event'); 