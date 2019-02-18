
console.log('INFO: Starting to read calc.js');

console.log('INFO: Getting access to elements');

const radiusElement = document.getElementById("radius");
const heightElement = document.getElementById("height");
const btnElement = document.getElementById("calcbtn");
const answerElement = document.getElementById("answerText");

const radius = radiusElement.value;
const height = heightElement.value;
console.log("radius", radius);

//set local storage
let storedRadius = localStorage.getItem("radius");
let storedHeight = localStorage.getItem("height");
document.getElementById("radius").innerHTML = parseFloat(storedRadius);
document.getElementById("height").innerHTML = parseFloat(storedHeight);

console.log('INFO: Configuring event handlers');

btnElement.addEventListener('click', function(){calcVolume(radiusElement.value,heightElement.value)});

console.log('INFO: Declaring functions');

function calcVolume(r,h){
    const volume = 3.14 * r * r * h;

    localStorage.setItem("radius", JSON.stringify(r));
    localStorage.setItem("height", JSON.stringify(h));

    if(r < 0 || h < 0){
        answerElement.innerHTML = `Invalid input - cannot be negative`
        return -1;
    }
    else if(r=="" || h==""){
        answerElement.innerHTML = `Invalid input - cannot be null`
        return null;
    }
    else{
        answerElement.innerHTML = `The volume is: ${volume} cubic centimeters.`
        return volume;
    }
}

console.log('INFO: Done loading, waiting for an event'); 