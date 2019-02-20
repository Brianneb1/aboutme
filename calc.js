
console.log('INFO: Starting to read calc.js');

console.log('INFO: Getting access to elements');

const radiusElement = document.getElementById("radius");
const heightElement = document.getElementById("height");
const btnElement = document.getElementById("calcbtn");
const answerElement = document.getElementById("answerText");
const mathElement = document.getElementById("math");

const radius = radiusElement.value;
const height = heightElement.value;
console.log("radius", radius);



console.log('INFO: Configuring event handlers');

//local storage based on Professor Case's emailed example
window.addEventListener('load', (event) => {
  console.log(' Starting initialization!')
  if (localStorage.getItem('radius')){
    document.getElementById('radius').value = parseInt(localStorage.radius)
  }
  if (localStorage.getItem('height')){
    document.getElementById('height').value = parseInt(localStorage.height)
  }
})

//clear local storage
document.getElementById('clearStorage').addEventListener('click', () =>{
  localStorage.removeItem('radius')
  localStorage.removeItem('height')
})

btnElement.addEventListener('click', function(){calcVolume(radiusElement.value,heightElement.value)});
mathElement.addEventListener('dblclick', function(){mathHandler()});

console.log('INFO: Declaring functions');

function calcVolume(r,h){
    const volume = 3.14 * r * r * h;

    localStorage.setItem('radius', r);
    localStorage.setItem('height', h)

    if(r < 0 || h < 0){
        answerElement.innerHTML = `Invalid input - cannot be negative`
        return -1;
    }
    else if(r=="" || h==""){
        answerElement.innerHTML = `Invalid input - cannot be null`
        return null;
    }
    else if(r > 100000 || h > 100000){
        answerElement.innerHTML = `Invalid input - input too large`
        return null;
    }
    else{
        answerElement.innerHTML = `The volume is: ${volume} cubic centimeters.`
        return volume;
    }
}

//based off Professor Case's example in the slides
function getMathFact() {
    return new Promise(function (resolve, reject) {  
      const req = new XMLHttpRequest();  
      req.timeout = 2000; 
      req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
          if (req.status === 200) {
            const fact = req.response;
            resolve(fact)
          } else {
            reject(req.status)
          }
        }
      }
      req.ontimeout = function () {
        reject('Error - timed out: ' + req.time)
      }
      req.open("GET", "https://numbersapi.com/random/math", true);  
      req.send();
    })
  }

  async function mathHandler() {
    const fact = await getMathFact();
    console.log(fact);
    $("#math").html(fact);
  }

console.log('INFO: Done loading, waiting for an event'); 
 