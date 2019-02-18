function calcVolume(r,h){
    const volume = 3.14 * r * r * h;

    if(r < 0 || h < 0){
        //answerElement.innerHTML = `Invalid input - cannot be negative`
        return -1;
    }
    else if(r=="" || h==""){
        //answerElement.innerHTML = `Invalid input - cannot be null`
        return null;
    }
    else{
        //answerElement.innerHTML = `The volume is: ${volume} cubic centimeters.`
        return volume;
    }
}

QUnit.test("calc", function(assert){
    assert.equal(calcVolume(0,0), null, "cylinder of 0x0 == 0");
    assert.equal(calcVolume(1,0), null, "cylinder of 1x0 == 0");
    assert.equal(calcVolume(1,1), 3.14, "cylinder of 1x1 == 3.14");
    assert.equal(calcVolume(-1,1), -1, "checking for negative volume to throw error: cylinder of -1x1 == -1");
    assert.equal(calcVolume("",1), null, "checking for missing input - null radius");
    assert.equal(calcVolume(1,""), null, "checking for missing input - null height");
});